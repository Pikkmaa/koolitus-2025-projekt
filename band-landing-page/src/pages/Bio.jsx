import { Container, Row, Col, Carousel } from "react-bootstrap";
import BioMap from "../components/BioMap";
import { useTranslation } from "react-i18next";

function Bio() {
  const { t } = useTranslation();

  // Get carousel and sections from translations
  const carouselItems = t("bio.carousel", { returnObjects: true });
  const sections = t("bio.sections", { returnObjects: true });

  return (
    <Container fluid className="bio-page">
      {/* Carousel */}
      <Row>
        <Col md={12}>
          <Carousel className="bio-carousel">
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={item.title}
                />
                <Carousel.Caption>
                  <h5>{item.title}</h5>
                  <p>{item.caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Bio Sections */}
      <Row>
        <Col md={10} className="mx-auto">
          {/* Early Years */}
          <section className="bio-section">
            <h2>{sections.earlyYears.title}</h2>
            <p>{sections.earlyYears.text}</p>
          </section>

          {/* First Album */}
          <section className="bio-section">
            <h2>{sections.firstAlbum.title}</h2>
            <img
              src={sections.firstAlbum.image}
              alt={sections.firstAlbum.albumTitle}
              className="album-cover"
            />
            <p>
              {sections.firstAlbum.albumTitle}
            </p>
            <p>{sections.firstAlbum.description}</p>
          </section>

          {/* Second Album */}
          <section className="bio-section">
            <h2>{sections.secondAlbum.title}</h2>
            <img
              src={sections.secondAlbum.image}
              alt={sections.secondAlbum.albumTitle}
              className="album-cover"
            />
            <p>
              {sections.secondAlbum.albumTitle}
            </p>
            <p>{sections.secondAlbum.description}</p>
          </section>

          {/* Lives */}
          <section className="bio-section">
            <h2>{sections.lives.title}</h2>
            <p>{sections.lives.text}</p>
            <BioMap />
          </section>

          {/* TV & Radio */}
          <section className="bio-section">
            <h2>{sections.tvRadio.title}</h2>
            <p>{sections.tvRadio.text}</p>
            <ul>
              {sections.tvRadio.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;

