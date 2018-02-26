title=$1
if [ "$title" == "" ]; then
  echo "객체명을 입력하세요."
  exit
fi

name="$(tr '[:upper:]' '[:lower:]' <<< ${title:0:1})${title:1}"

cp controller.tmpl $name.go
sed -i '' 's/{ControllerName}/'"$title"'/g' $name.go
sed -i '' 's/{controllerName}/'"$name"'/g' $name.go