import InfoBox from "./Components/InfoBox";
import SearchBox from "./Components/SearchBox";
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "WanderLand",
        feelsLike: 19.1, humidity: 42, temp: 19.95, tempMax
            : 19.95, tempMin: 19.95, weather: "scattered clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox Info={weatherInfo} />
        </div>
    )
}