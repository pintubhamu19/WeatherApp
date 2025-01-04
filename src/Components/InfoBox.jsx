import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ Info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCUyMnNjYXR0ZXJlZCUyMGNsb3VkcyUyMiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    const COLD_URL = "https://images.unsplash.com/photo-1708560807705-be4f47b74382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // let Info = {
    //     city: "Delhi",
    //     feelsLike: 19.1, humidity: 42, temp: 19.95, tempMax
    //         : 19.95, tempMin: 19.95, weather: "scattered clouds"
    // }

    return (
        <div className="InfoBox">
            <h1><u>WeatherInfo</u></h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
                        title="scattered clouds"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city} {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p><b>Temperature :</b> {Info.temp}&deg;C</p>
                            <p><b>Humidity :</b> {Info.humidity}</p>
                            <p><b>Max Temperature :</b> {Info.tempMax}&deg;C</p>
                            <p><b>Min Temprature :</b> {Info.tempMin}&deg;C</p>
                            <p><b>The weather can be described as <u><i style={{ color: "black" }}>{Info.weather} </i></u>and feels like :</b> {Info.feelsLike}&deg;C</p>

                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}