title=$1
if [ "$title" == "" ]; then
  echo "객체명을 입력하세요."
  exit
fi

cd controllers && ./create.sh $title
cd ../models && ./create.sh $title
cd ../requests && ./create.sh $title