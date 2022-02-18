import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherCard from './WeatherCard'
import MainCard from './MainCard'
import PropTypes from 'prop-types';

const Main = ({weatherData}) => {
  return (
    <div className="container">
      <MainCard/>
      <WeatherCard style = {{ml: '12vw'}}/>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  )
}


export default Main