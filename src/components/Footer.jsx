import Link from "next/link";
import Image from "next/image";

//import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link href="/" className="logo-footer flex gap-2 flex-center">
          <Image
            src="/assets/logo-w.png"
            alt="Lantana Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        <p>
          &copy; {new Date().getFullYear()} Lantana Services (Pty) Ltd. All rights
          reserved
        </p>
        <div className="social_icons">
          <a
            href="https://web.facebook.com/groups/912202635464484"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
      <FontAwesomeIcon icon={faFacebook}/>

          </a>
          <a
            href="https://www.instagram.com/lantanaconstructionservices/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="mailto:admin@lantanaservices.co.za"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <hr />
        <div className="footer-links">
          <Link href="/" className="footer-link">
            About
          </Link>
          <Link href="/services" className="footer-link">
            Services
          </Link>
          <Link href="/projects" className="footer-link">
            Projects
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <hr />

        <div className="footer-details">
          <p>Contact:</p>
          <p>e: admin@lantanaservices.co.za</p>
          <p>c: +27 63 853 1370</p>
          <br />
          <a
            href="https://www.google.com/maps/place/Parys/@-26.9067456,27.399811,12z/data=!3m1!4b1!4m6!3m5!1s0x1e943e6ab093a237:0xee46bd9b1b1d23e8!8m2!3d-26.9110891!4d27.4908738!16zL20vMDUxNDg4?entry=ttu"
            aria-label="Location"
            target="_blank"
            rel="noopener noreferrer"
            className="location-icon"
          >
            <FontAwesomeIcon icon={faLocationDot} /> Parys, Free state
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
