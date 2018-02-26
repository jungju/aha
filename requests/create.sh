title=$1
if [ "$title" == "" ]; then
  echo "객체명을 입력하세요."
  exit
fi

name="$(tr '[:upper:]' '[:lower:]' <<< ${title:0:1})${title:1}"

cp request.tmpl $name.go
sed -i '' 's/{RequestName}/'"$title"'/g' $name.go
sed -i '' 's/{requestName}/'"$name"'/g' $name.go