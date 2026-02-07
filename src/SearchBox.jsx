import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateWeatherData}) {
    let[city,setCity]=useState('');
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="993455693e80028a87c812448e7e1fa6";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:jsonResponse.name,
            temperature:jsonResponse.main.temp,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            weather:jsonResponse.weather[0].main,
        }
        console.log(result);
        return result;

        }catch(error){
            throw error;
        }

    };
    let handleChange=(event)=>{
        setCity(event.target.value);
        
      };

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity('');
       let newInfo= await getWeatherInfo();
         updateWeatherData(newInfo);

        }catch(error){
            setError(true);
        }
    };
    return (
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:'red'}}>No such place found!</p>}
        </form>
        </div>
    );
}