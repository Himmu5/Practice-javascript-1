import { useState } from "react";

function Home() {
  const [time, settime] = useState<{ sec: number; min: number; hour: number }>({
    sec: 0,
    min: 0,
    hour: 0,
  });

  let degreeSeconds;
  function setTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    let minute = date.getMinutes();
    let hours = date.getHours();
    degreeSeconds = ((seconds / 60) * 360  + 90);
    const minuteDegree = ( (minute / 60) * 360);
    const hourDegree = ((hours / 60) * 360 + 270);
    settime({ ...time, min: minuteDegree, sec: degreeSeconds, hour: hourDegree });
  }
  setInterval(setTime, 1 * 1000);
  
  return (
    <div className="flex gap-2 justify-center items-center bg-Music-Background h-screen " onClick={setTime}>
      <div
        className="p-40 relative rounded-full border border-4 border-white -rotate-90"
        
      >
        <div className="px-4 h-1 absolute bg-white w-32 border border-white origin-customOrigin " style={{ transform: `rotate(${time.hour}deg)`}}></div>
        <div
          className="px-4 h-1 absolute bg-white w-36 border border-white origin-customOrigin "
          style={{ transform: `rotate(${time.min}deg)` }}
        ></div>
        <div
          className={`px-4 h-1 absolute bg-white w-36 border border-white origin-customOrigin `}
          style={{ transform: `rotate(${time.sec}deg)` }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
