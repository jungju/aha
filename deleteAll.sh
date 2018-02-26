title=$1
if [ "$title" == "" ]; then
  echo "객체명을 입력하세요."
  exit
fi

cd controllers && rm $title
cd ../models && rm $title
cd ../requests && rm $title