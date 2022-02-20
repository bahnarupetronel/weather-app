import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherCard from './WeatherCard'
import MainCard from './MainCard'
import PropTypes from 'prop-types';

const Main = ({weatherData}) => {

  let country, city, temperature, humidity, windSpeed, visibility,
      pressure, description, updated;
    
    //if the object is empty, we ll use the default props
    const isEmpty = Object.keys(weatherData).length === 0;

    if(isEmpty === false){
      //current date
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + ' ' + time;

      country = weatherData.city.country 
      city = weatherData.city.name 
      temperature = Math.round(weatherData.list[0].main.temp)
      //temperatureNight = weatherData.list[0].temp.night
      windSpeed = weatherData.list[0].wind.speed
      updated = dateTime
      pressure = weatherData.list[0].main.pressure
      description = weatherData.list[0].weather[0].description
      visibility = weatherData.list[0].visibility
      humidity = weatherData.list[0].main.humidity
    }

  return (
    <div className="container">
      <MainCard 
        country = {country} 
        city = {city} 
        temperature = {temperature}
        windSpeed = {windSpeed}
        updated = {updated}
        pressure = {pressure}
        description = {description}
        visibility = {visibility}
        humidity = {humidity}
        />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  )
}

Main.propTypes = {
  country: PropTypes.string, 
  city: PropTypes.string, 
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  windSpeed: PropTypes.number,
  visibility: PropTypes.number,
  pressure: PropTypes.number,
  description: PropTypes.string,
  updated: PropTypes.string
}

Main.defaultProps = {
  country: 'Country' ,
  city: 'City', 
  temperature: 0, 
  humidity: 0, 
  windSpeed: 0, 
  visibility: 0, 
  pressure: 0,
  description: 'description',
  updated: 'updated'
}

export default Main