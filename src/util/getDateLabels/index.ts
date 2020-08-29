import { fixTime } from '../getFormatedDate';

export function getDateLabels(timeinMilliseconds: number, intervalTimeInMilliseconds: number) {

  const now = new Date();
  const yesterday = new Date(Date.now() - timeinMilliseconds);

  let start = yesterday.getTime();
  let end = now.getTime();
  let labelsArr :any = [];

  for(let loop = start; loop <= end; loop += intervalTimeInMilliseconds){
    let loopDate = new Date(loop);
    let hours = fixTime(loopDate.getHours());
    let minutes = fixTime(loopDate.getMinutes());
    let formatedTime = `${hours}:${minutes}`;
    if(loop == start || (loop + intervalTimeInMilliseconds) > end) {
      let day = fixTime(loopDate.getDate());
      let month = fixTime(loopDate.getMonth()+1);
      let year = loopDate.getFullYear().toString().slice(-2);
      formatedTime = `${day}/${month}/${year} ${formatedTime}`;
    }
    labelsArr.push(formatedTime);
  }

  return labelsArr;
}