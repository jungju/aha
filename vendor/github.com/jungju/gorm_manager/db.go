package gorm_manager

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
)

type DBConfig struct {
	DBType             string
	DBHost             string
	DBPort             string
	DBUser             string
	DBPass             string
	DBName             string
	OnLog              bool
	AutoCreateDatabase bool
	RecreateDatabase   bool
	Sqlite3DBPath      string
}

type DBManager struct {
	Config *DBConfig
	gormDB *gorm.DB
}

func New(c *DBConfig) (*DBManager, error) {
	m := &DBManager{
		Config: c,
	}
	if err := m.SetDB(); err != nil {
		return nil, err
	}
	return m, nil
}

func DefaultMysqlNewWithEnv(onLog bool) (*DBManager, error) {
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")

	m := &DBManager{
		Config: &DBConfig{
			DBType:             "mysql",
			DBHost:             dbHost,
			DBPort:             dbPort,
			DBName:             dbName,
			DBUser:             dbUser,
			DBPass:             dbPass,
			AutoCreateDatabase: true,
			OnLog:              onLog,
		},
	}

	if err := m.SetDB(); err != nil {
		return nil, err
	}

	return m, nil
}

func (m *DBManager) SetDB() error {
	m.prepare()

	dsn := ""
	if m.Config.AutoCreateDatabase {
		dsn = m.MakeDSN()
	} else {
		dsn = m.MakeDSNWithDatabase()
	}

	db, err := gorm.Open(m.Config.DBType, dsn)
	if err != nil {
		return err
	}

	if m.Config.RecreateDatabase {
		if err := m.DeleteDB(db); err != nil {
			fmt.Println(err.Error())
		}
	}

	if db, err = m.CreateDB(db); err != nil {
		fmt.Println(err.Error())
	}

	db.LogMode(m.Config.OnLog)

	m.gormDB = db

	return nil
}

func (m *DBManager) prepare() {
	if m.Config.DBType == "mysql" {
		if m.Config.DBPort == "" {
			m.Config.DBPort = "3306"
		}
	}
}

func (m *DBManager) CreateDB(db *gorm.DB) (*gorm.DB, error) {
	if m.Config.DBType == "sqlite3" {
		return db, nil
	}

	if err := db.Exec(m.MakeCreateDatabaseSQL()).Error; err != nil {
		return nil, err
	}

	var err error
	db, err = gorm.Open(m.Config.DBType, m.MakeDSNWithDatabase())
	if err != nil {
		return nil, err
	}

	return db, nil
}

func (m *DBManager) DeleteDB(db *gorm.DB) error {
	if m.Config.DBType == "sqlite3" {
		return nil
	}

	if err := db.Exec(m.MakeDropDatabaseSQL()).Error; err != nil {
		fmt.Println(err.Error())
	}
	return nil
}

func (m *DBManager) GetDB() *gorm.DB {
	return m.gormDB
}

func (m *DBManager) MakeDSN() string {
	if m.Config.DBType == "mssql" {
		return fmt.Sprintf("sqlserver://%s:%s@%s:%s?", m.Config.DBUser, m.Config.DBPass, m.Config.DBHost, m.Config.DBPort)
	} else if m.Config.DBType == "sqlite3" {
		return m.Config.Sqlite3DBPath
	}
	return fmt.Sprintf("%s:%s@tcp(%s:%s)/?charset=utf8&parseTime=True&loc=Local", m.Config.DBUser, m.Config.DBPass, m.Config.DBHost, m.Config.DBPort)
}

func (m *DBManager) MakeDSNWithDatabase() string {
	if m.Config.DBType == "mssql" {
		return fmt.Sprintf("sqlserver://%s:%s@%s:%s?database=%s&encrypt=disable", m.Config.DBUser, m.Config.DBPass, m.Config.DBHost, m.Config.DBPort, m.Config.DBName)
	} else if m.Config.DBType == "sqlite3" {
		return m.Config.Sqlite3DBPath
	}
	return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", m.Config.DBUser, m.Config.DBPass, m.Config.DBHost, m.Config.DBPort, m.Config.DBName)
}

func (m DBManager) MakeCreateDatabaseSQL() string {
	if m.Config.DBType == "mysql" {
		return fmt.Sprintf("CREATE DATABASE if not exists `%s` CHARSET utf8 COLLATE utf8_general_ci", m.Config.DBName)
	}
	return fmt.Sprintf("CREATE DATABASE %s", m.Config.DBName)
}

func (m DBManager) MakeDropDatabaseSQL() string {
	if m.Config.DBType == "mysql" {
		return fmt.Sprintf("DROP DATABASE `%s`", m.Config.DBName)
	}
	return fmt.Sprintf("DROP DATABASE %s", m.Config.DBName)
}
