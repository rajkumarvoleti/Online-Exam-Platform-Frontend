import {useEffect, useState} from 'react'

interface BatteryStatus {
  charging: boolean;
  level: number;
  dischargingTime: number;
}

export type IBattery = BatteryStatus | null;

export const useBatter = () => {
  const [batteryStatus, setBatteryStatus] = useState<IBattery>(null);

  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then(function(battery:any) {
        updateBatteryStatus(battery);

        battery.addEventListener('chargingchange', function() {
          updateBatteryStatus(battery);
        });

        battery.addEventListener('levelchange', function() {
          updateBatteryStatus(battery);
        });

        battery.addEventListener('dischargingtimechange', function() {
          updateBatteryStatus(battery);
        });
      });
    } else {
      console.log('Battery Status API is not supported in this browser.');
    }
  }, []);

  // Function to update the battery status
  const updateBatteryStatus = (battery: BatteryStatus) => {
    const status: BatteryStatus = {
      charging: battery.charging,
      level: battery.level,
      dischargingTime: battery.dischargingTime
    };
    setBatteryStatus(status);
  };

  return batteryStatus;

}