import WeatherApp from './WeatherApp';
import nature_img from "./assets/nature.jpg"
import "./App.css"

function App() {

  return (
    <>
      <h1 className='weather'><u>Weather App</u></h1>
      <div className='main' style={{
        backgroundImage: `url(${nature_img})`,
        backgroundSize: "cover",
        backgroundPosition: 'center'
      }}>
        <WeatherApp />
      </div >
    </>
  )
}

export default App
