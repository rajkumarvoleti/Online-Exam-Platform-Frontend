import { IBattery, useBatter } from '@/hooks/useBattery';

export default function BatteryStatus() {

  const batteryStatus:IBattery = useBatter();

  return (
    <div>
      {batteryStatus && (
        <div>
          <p>Battery charging: {batteryStatus.charging ? 'Yes' : 'No'}</p>
          <p>Battery level: {batteryStatus.level}</p>
          <p>Battery discharging time: {batteryStatus.dischargingTime}</p>
        </div>
      )}
    </div>
  );
};

