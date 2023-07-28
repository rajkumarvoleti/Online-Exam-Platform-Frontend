export interface ITime {
  hours:number,
  minutes:number,
  seconds:number,
}

export const getSeconds = (time:ITime): number => (time.hours*60*60) + (time.minutes*60) + time.seconds; 

export const getTimeFromSeconds = (seconds:number):ITime => {
  const time:ITime = {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60
  }
  return time;
}

export const getTwoDigit = (num:number):string => {
  if(Math.floor(num/10) === 0)
    return "0" + num.toString();
  return num.toString();
}