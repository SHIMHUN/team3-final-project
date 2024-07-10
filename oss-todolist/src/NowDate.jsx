const today = new Date();

const formattedDate = `${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일`;

function NowDate() {
  return <div>{formattedDate}</div>;
}

export default NowDate;
