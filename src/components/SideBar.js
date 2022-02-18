import Nav from 'react-bootstrap/Nav'
import "./navBar.css"

const SideBar = () => {
  return (
    <>
      <Nav className="col-md-12  d-block bg-dark sidebar text-center lead"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
          <div className="sidebar-sticky"></div>
          <Nav.Item className = 'mb-auto  homeIcon'>
              <Nav.Link href="/home"><i className="bi bi-house-door-fill"></i></Nav.Link>
          </Nav.Item>

          <Nav.Item  className = 'mb-auto'>
              <Nav.Link eventKey="link-1"><i className="bi bi-list-stars"></i></Nav.Link>
          </Nav.Item>

          <Nav.Item className = 'personIcon' variant = "dark">
              <Nav.Link eventKey="link-2"  ><i className = "bi bi-person"/></Nav.Link>
          </Nav.Item>

          <Nav.Item className = 'settingsIcon' variant = "dark">
              <Nav.Link eventKey="link-2"  ><i className = "bi bi-gear"/></Nav.Link>
          </Nav.Item>

      </Nav>
    </>
  )
}

export default SideBar