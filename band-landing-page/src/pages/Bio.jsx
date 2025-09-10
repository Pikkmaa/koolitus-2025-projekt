import { Container, Row, Col, Carousel, Offcanvas, Button } from "react-bootstrap";
import BioMap from "../components/BioMap";

function Bio() {

  return (
    <Container fluid className="bio-page">
      {/* Main content */}
      <Row>
        <Col md={12}>
          {/* Carousel */}
          <Carousel className="bio-carousel">
            <Carousel.Item>
              <img className="d-block w-100" src="/images/night-flies.png" alt="First slide" />
              <Carousel.Caption>
                <h5>Night Flies</h5>
                <p>Clen Kink - Toomas Pikkmaa - Anna Siitan - Martin Parts - Madis Koll</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/kinomaja_live.jpg" alt="Second slide" />
              <Carousel.Caption>
                <h5>On Stage</h5>
                <p>Energy and passion in live shows.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/images/NightFlies-074.jpg" alt="Third slide" />
              <Carousel.Caption>
                <h5>Summer festivals</h5>
                <p>Little rain does not bother us!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Bio sections */}
      <Row>
        <Col md={10} className="mx-auto">
          <section className="bio-section">
            <h2>Early Years</h2>
            <p>
              Night Flies was founded in Tallinn... (add real content later).
              The first lineup included founding members with later changes shaping the sound.
            </p>
          </section>

          <section className="bio-section">
            <h2>First Album</h2>
            <img src="/images/smooth.png" alt="First Album" className="album-cover" />
            <p><strong>Album Title: </strong>Smooth</p>
            <p>Lorem ipsum description of the first album...</p>
          </section>

          <section className="bio-section">
            <h2>Second Album</h2>
            <img src="/images/4am.jpg" alt="Second Album" className="album-cover" />
            <p><strong>Album Title: </strong>Four in the Morning</p>
            <p>Lorem ipsum description of the second album...</p>
          </section>

          <section className="bio-section">
            <h2>Lives</h2>
            <p>
              Night Flies has performed across multiple cities... Here are some locations.
            </p>
            <BioMap />
          </section>

          <section className="bio-section">
            <h2>TV & Radio Appearances</h2>
            <p>
              The band has been featured in Estonian radio & TV shows.
            </p>
            <ul>
              <li><a href="https://example.com" target="_blank" rel="noreferrer">ETV Interview 2022</a></li>
              <li><a href="https://example.com" target="_blank" rel="noreferrer">Radio 2 Live Session</a></li>
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
