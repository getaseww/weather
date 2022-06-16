import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [newLong,setNewLong]=useState(null)
  const [newLat,setNewLat]=useState(null)


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=77148a0a429e785741acec42e0b091e6`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  const updateData=async(e)=>{
    e.preventDefault()
    await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${newLat}&lon=${newLong}&units=metric&APPID=77148a0a429e785741acec42e0b091e6`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
  }
  return (
    <div className="App">
      <form style={{width:"200px",height:"100px",paddingTop:"33vh",paddingLeft:"40px",display:"flex",flexDirection:"column"}}>
            <input
            type='text'
            placeholder='Longtude'
            onChange={(e)=>setNewLong(e.target.value)}
            /><input
            type='text'
            placeholder='Latitude'
            onChange={(e)=>setNewLat(e.target.value)}
            />
            <button onClick={updateData}>Submit</button>
        </form>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}