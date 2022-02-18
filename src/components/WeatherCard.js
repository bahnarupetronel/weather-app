import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card"

const WeatherCard = () => {
  return (
    <Card style={{display: 'inline-block', position: 'relative' }} 
      className = "weatherCard lead">
     
      <Card.Body style={{display: 'inline-block'}}>
        <Card.Title className="boldText">Date</Card.Title>
        <Card.Text>
          <i className ="bi bi-cloud-hail-fill"></i>
        </Card.Text>
        <Card.Text className="text-secondary dayTemperature boldText">
          27 &#176; 
        </Card.Text>
        <Card.Text className="text-secondary nightTemperature boldText">
          20 &#176; 
        </Card.Text>
        <Card.Text className="text-secondary boldText">
          Mostly clouds
        </Card.Text>
        
      </Card.Body>
  </Card>
  )
}

export default WeatherCard