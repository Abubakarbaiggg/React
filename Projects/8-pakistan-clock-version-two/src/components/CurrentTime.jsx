import { useEffect, useState } from "react";

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