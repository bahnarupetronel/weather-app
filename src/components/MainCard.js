import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card"

const MainCard = () => {
  return (
    <Card style={{display: 'block'}} 
        className = "mainCard lead">
        <Card.Body>
            <Card.Text className="location boldText">
                City, Country
            </Card.Text>
            <Card.Text className="temperature">
                Temperatura
            </Card.Text>
            <Card.Text className="updateHour boldText">
                updated
            </Card.Text>
            <Card.Text className="weatherDetails boldText">
                umidity:text wind: text visibility:text barometer:text
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default MainCard