import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, SetCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        }
        catch (err) {
            throw err;
        }

    }

    let handleChange = (event) => {
        SetCity(event.target.value)
        // setError(false)
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            SetCity("")
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
            setError(false);
        } catch (err) {
            setError(true);
        }


    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField className='input' onChange={handleChange} value={city} id="city" label="City Name" variant="outlined" required />
                <br />
                <br />
                <Button type='submit' variant="contained">
                    Search
                </Button>

                {
                    error && <p style={{ color: "red" }}>No such place exists in our API!</p>
                }
            </form>
        </div>
    )
}