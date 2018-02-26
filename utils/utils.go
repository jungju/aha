package utils

import (
	"archive/zip"
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/astaxie/beego"
	"github.com/jungju/aha/envs"
	"github.com/kardianos/osext"
	"golang.org/x/crypto/bcrypt"
)

func ConvUint(idStr string) uint {
	id, _ := strconv.ParseUint(idStr, 0, 64)
	return uint(id)
}

func Req(method string, url string, body interface{}, token string, model interface{}) (int, error) {
	var r *http.Request
	beego.Info(url, "호출합니다.")
	if body == nil {
		r, _ = http.NewRequest(method, url, nil)
	} else {
		bodyBytes, _ := json.Marshal(body)
		r, _ = http.NewRequest(method, url, bytes.NewBuffer(bodyBytes))
		r.Header.Add("Content-Type", "application/json")
	}
	if token != "" {
		r.Header.Add(envs.UserTokenHeaderName, token)
	}

	client := &http.Client{}
	w, err := client.Do(r)
	if err != nil {
		beego.Error("집뷰CRM 요청 실패", err)
		return -1, err
	}
	if w.StatusCode >= 200 && w.StatusCode <= 400 {
		if model != nil {
			resBody, _ := ioutil.ReadAll(w.Body)
			if err := json.Unmarshal(resBody, model); err != nil {
				return -1, err
			}
			//beego.Trace(w.StatusCode, ". BODY : ", string(resBody))
		}
	}

	beego.Info("집뷰CRM 요청 성공. 상태 : ", method, url, w.StatusCode)
	return w.StatusCode, nil
}

func Unzip(src, dest string) error {
	r, err := zip.OpenReader(src)
	if err != nil {
		return err
	}
	defer func() {
		if err := r.Close(); err != nil {
			panic(err)
		}
	}()

	os.MkdirAll(dest, 0755)

	// Closure to address file descriptors issue with all the deferred .Close() methods
	extractAndWriteFile := func(f *zip.File) error {
		rc, err := f.Open()
		if err != nil {
			return err
		}
		defer func() {
			if err := rc.Close(); err != nil {
				panic(err)
			}
		}()

		path := filepath.Join(dest, f.Name)

		if f.FileInfo().IsDir() {
			os.MkdirAll(path, f.Mode())
		} else {
			os.MkdirAll(filepath.Dir(path), f.Mode())
			f, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
			if err != nil {
				return err
			}
			defer func() {
				if err := f.Close(); err != nil {
					panic(err)
				}
			}()

			_, err = io.Copy(f, rc)
			if err != nil {
				return err
			}
		}
		return nil
	}

	for _, f := range r.File {
		err := extractAndWriteFile(f)
		if err != nil {
			return err
		}
	}

	return nil
}

func GetAppPath() string {
	apppath, _ := osext.ExecutableFolder()
	return apppath
}

func DownloadFromUrl(url string, fileName string) error {
	beego.Info("Downloading", url, "to", fileName)
	output, err := os.Create(fileName)
	if err != nil {
		beego.Error(err)
		return err
	}
	defer output.Close()

	response, err := http.Get(url)
	if err != nil {
		beego.Error(err)
		return err
	}
	defer response.Body.Close()

	n, err := io.Copy(output, response.Body)
	if err != nil {
		beego.Error(err)
		return err
	}

	beego.Info(n, "bytes downloaded.")
	return nil
}

func Digest(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(hashedPassword), err
}
