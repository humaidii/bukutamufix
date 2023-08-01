import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap"
import kemenagImage from "../assets/images/kemenag.png"
import "../style/nav.css"
export default function NavigasiBar() {
    return (
        <>
    <Navbar fixed="top" expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home">
            <Image src={kemenagImage} alt="Logo Kemenag" className="nav-logo"/>
            KEMENAG
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Data Master" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Data Tamu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data Satuan Kerja</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}