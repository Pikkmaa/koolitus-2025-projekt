import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function BandNavBar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

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
            <Nav.Link as={NavLink} to="/bio">{t("navbar.bio")}</Nav.Link>
            <Nav.Link as={NavLink} to="/events">{t("navbar.events")}</Nav.Link>
            <Nav.Link as={NavLink} to="/merch">{t("navbar.merch")}</Nav.Link>
            <Nav.Link as={NavLink} to="/booking">{t("navbar.booking")}</Nav.Link>
            <Nav.Link as={NavLink} to="/info">{t("navbar.info")}</Nav.Link>

            <NavDropdown title="Admin" id="admin-dropdown">
              <NavDropdown.Item as={NavLink} to="/admin/add-event">{t("navbar.addEvent")}</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/admin/add-merch">{t("navbar.addMerch")}</NavDropdown.Item>
            </NavDropdown>

            <div className="d-flex ms-3">
              <button
                onClick={() => i18n.changeLanguage("et")}
                className={`lang-btn ${currentLang === "et" ? "active" : ""}`}
              >
                ET
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
              >
                EN
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BandNavBar;
