import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import axios from 'axios'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({})

  const handleChange = (city) => {
    setCity(city)
  }
  
  const fetchWeather = async() => {

    let options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
      params: {
        q: city,
        units: 'metric',
        cnt: '7'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '7ba1ebb4e0msh1ee3c13786d6eacp15f4e9jsn06d6c190f943'
      }
    };

    axios.request(options).then(function (response) {   
      setWeatherData(response.data)
      console.log(weatherData);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  return (
    <div className="App">
      <NavigationBar onClick={fetchWeather} onChange = {handleChange} value = {city}/>
      <SideBar/>
      <Main />
    </div>
  );
}


export default App;
