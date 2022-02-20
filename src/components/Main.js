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
     
      country = weatherData.city.country 
      city = weatherData.city.name 
      temperature = weatherData.list[0].main.temp
      //temperatureNight = weatherData.list[0].temp.night
      windSpeed = weatherData.list[0].wind.speed
      updated = weatherData.list[0].dt_txt
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

/*
Main.propTypes = {
  weatherData: PropTypes.object
}

Main.defaultProps = {
  weatherData: {
    city: [
      {
        country: '',
        name: '',
      }
    ],
    list: [
        {
          0: [ 
            {
              main:
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                },
              visibility: '',
              wind:{
                  speed: ''
                },
              weather:
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
            }
          ],
          1: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
          2: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
          3: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
          4: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
          5: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
          6: [ 
            {
              main: [
                {
                  feels_like: '',
                  humidity: '',
                  pressure: '',
                  temp: ''
                }
              ],
              visibility: '',
              wind: [
                {
                  speed: ''
                }
              ],
              weather: [
                {
                  0: [
                    {
                      id: '',
                      main: '',
                      description: '',
                      icon: ''
                    }
                  ]
                }
              ]
            }
          ],
        }
    ],
  }
}*/

export default Main