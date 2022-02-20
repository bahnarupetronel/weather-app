import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card"
import PropTypes from 'prop-types';

const MainCard = ({country, city, temperature, humidity, windSpeed, visibility,
    pressure, description, updated}) => {
    //if the object is empty, we ll use the default props
    return (
        <Card style={{display: 'block'}} 
            className = "mainCard lead">
            <Card.Body>
                <Card.Text className="location boldText">
                    {city}, {country}
                </Card.Text>
                <Card.Text className="temperature">
                    {temperature}&#8451;
                </Card.Text>
                <Card.Text className="updateHour boldText">
                    {updated}
                </Card.Text>
                <Card.Text className="weatherDetails boldText">
                    humidity: {humidity} wind speed: {windSpeed} visibility: {visibility} pressure: {pressure}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}



MainCard.propTypes = {
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
  
  MainCard.defaultProps = {
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

export default MainCard