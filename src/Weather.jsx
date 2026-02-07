import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'  
import { useState } from 'react';

export default function Weather() {
    const[weatherData,setWeatherData]=useState({
        city:"Delhi",
        temperature:25,
        humidity:60,
        pressure:1013,
        temp_min:20,
        temp_max:30,
        weather:"Clear",
    });

    let updateWeatherData=(result)=>{
        setWeatherData(result);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateWeatherData={updateWeatherData} />
            <InfoBox info={weatherData} />
        </div>
    );
}