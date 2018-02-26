title=$1
if [ "$title" == "" ]; then
  echo "객체명을 입력하세요."
  exit
fi

name="$(tr '[:upper:]' '[:lower:]' <<< ${title:0:1})${title:1}"

cp model.tmpl $name.go
sed -i '' 's/{ModelName}/'"$title"'/g' $name.go
sed -i '' 's/{modelName}/'"$name"'/g' $name.go