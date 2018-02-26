// +build genbin

package main

import (
	"os"
	"path/filepath"

	"github.com/jungju/aha/admin/bindatafs"
)

func main() {
	assetFS := bindatafs.AssetFS

	var root, _ = os.Getwd()
	adminAssetFS := assetFS.NameSpace("admin")
	adminAssetFS.RegisterPath(filepath.Join(root, "admin/views/admin"))

	assetFS.Compile()
}
