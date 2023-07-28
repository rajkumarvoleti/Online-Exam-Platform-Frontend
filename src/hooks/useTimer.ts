import { ITime, getSeconds, getTimeFromSeconds } from "@/utils/timeUtils"
import { useEffect, useState } from "react"


export const useTimer = (initialTime: ITime) => {
  const [time, setTime] = useState<ITime>(initialTime);

  useEffect(() => {

    const interval = setInterval(() => {
      let seconds:number = getSeconds(time);
      if(seconds === 0)
        clearInterval(interval);
      else{
        seconds -= 1;
        const newTime:ITime = getTimeFromSeconds(seconds);
        setTime(newTime);
      }
    },1000)

    return () => {
      clearInterval(interval);
    }
  }, [time])
  
  return time;
  
}