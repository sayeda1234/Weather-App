import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    let imageUrl = "https://images.unsplash.com/photo-1499346030926-9a72daac6c63";

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds";

    return (
        <div className='InfoBox'>
            <Card sx={{ width: 340 }}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAINY_URL:info.temperature>15 ? HOT_URL : COLD_URL}
        className='weather-image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80 ? <ThunderstormIcon/>:info.temperature>15 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature= {info.temperature}°C</p>
          <p>Humidity= {info.humidity}%</p>
          <p>Pressure= {info.pressure} hPa</p>
          <p>Min Temp= {info.temp_min}°C</p>
          <p>Max Temp= {info.temp_max}°C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}
