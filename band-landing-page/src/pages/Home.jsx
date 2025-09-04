import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlSocialSpotify } from "react-icons/sl";
import { TfiYoutube } from "react-icons/tfi";
import { SiApplemusic } from "react-icons/si";
import "./Home.css";

function Home() {
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <Container className="text-center">
        <h2 className="mb-4 text-light">Follow & Listen</h2>
        <div className="streaming-links">
          <a
            href="https://open.spotify.com/artist/0xcCeyPuJNbOyokvI59lFp"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >
            <SlSocialSpotify size={40} />
          </a>
          <a
            href="https://www.youtube.com/@NightFlies-hard"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >
            <TfiYoutube size={40} />
          </a>
          <a
            href="https://music.apple.com/us/artist/night-flies/1642777052"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >
            <SiApplemusic size={40} />
          </a>
          <a
            href="https://www.facebook.com/NightFliesHard"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >
            <FaFacebookF size={40} />
          </a>
          <a
            href="https://instagram.com/nightfliesband"
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Home;
