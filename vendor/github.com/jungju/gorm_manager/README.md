# gorm_manager

# Use
```
dbMode := "test"
onLog := true

dbm, err := gorm_manager.DefaultMysqlNew(dbMode, onLog)
if err != nil {
  panic(err)
}
gormDB := dbm.GetDB()

gormDB.....
```
