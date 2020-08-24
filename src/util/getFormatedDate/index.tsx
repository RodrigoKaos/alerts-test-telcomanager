export function getFormatedDate (UNIXTimestamp: number) {
  if(UNIXTimestamp == null) return { formatedTime: '00:00', formatedDate: '00/00/00' };
  const milliseconds = 1000;
  const date = new Date(UNIXTimestamp * milliseconds);
  
  const hours = fixTime(date.getHours());
  const minutes = fixTime(date.getMinutes());
  
  const day = fixTime(date.getDate());
  const month = fixTime(date.getMonth()+1);
  const year = date.getFullYear().toString().slice(-2);

  const formatedDate = `${day}/${month}/${year}`;
  const formatedTime = `${hours}:${minutes}`;

  return { formatedTime, formatedDate };
}

export function fixTime(argTime :number) {
  const hasOneDigit = (argTime.toLocaleString('pt-BR') as unknown as number) < 10;
  return hasOneDigit ? `0${argTime}`: argTime;
}