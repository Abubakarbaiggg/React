import { useEffect, useState } from "react";

<<<<<<< HEAD
let  CurrentTime = () => {

    const [time,setTime] =  useState(new Date());
    useEffect(()=>{
        console.log("Interval has been setup");
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("cancelled the interval");
        }
    },[]);

    return <p className="lead">This is the current time :  {time.toLocaleDateString()} - { time.toLocaleTimeString()} </p>
}
export default CurrentTime;
=======
let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Cancelled has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  },[]);
  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}{" "}
    </p>
  );
};
export default CurrentTime;
>>>>>>> bed9feea24226c77251fcc8bf67eb80ad4d3739f
