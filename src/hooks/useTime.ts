import { ITime } from '@/utils/timeUtils';
import { useEffect, useState } from 'react';

const useTime = (): ITime => {
  const [currentDate, setcurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const time:ITime = {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
  };

  return time;
};

export default useTime;