import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function BandNavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm custom-navbar">
      <Container>
        {/* Logo that routes to homepage */}
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          Night Flies
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="band-navbar-nav" />
        <Navbar.Collapse id="band-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/music">
              Music
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bio">
              Bio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/merch">
              Merch
            </Nav.Link>
            <Nav.Link as={NavLink} to="/booking">
              Booking
            </Nav.Link>
            <Nav.Link as={NavLink} to="/info">
              Info
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BandNavBar