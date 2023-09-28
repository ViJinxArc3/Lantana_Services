import Image from "next/image";
import Link from "next/link";

//import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faChessKnight,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const about = () => {
  return (
    <div className="about_container">
      <div className="main-image"></div>
      <section className="header_desc">
        <div className="desc-container">
          <h1 className="head_text">What makes us different.</h1>
          <p className="desc text-centre">We deliver the best of everything.</p>
        </div>
      </section>

      <div className="about-1">
        <div className="about-text">
          <h1>About</h1>
          <p>
            LANTANA SERVICES (PTY) LTD stands as a versatile construction
            andhome improvement enterprise, distinguished by its
            demonstratedexpertise across a diverse spectrum of services.
            <br />
            Collaborating with seasoned professionals boasting years of
            experience,the company was founded in 2020 by Jeanne van der Lingen
            with thecore mission of providing these experts opportunities to
            pursue theirpassions and collectively enrich their wealth of
            knowledge."
          </p>
        </div>
        <div className="about-img-container">
          <Image
            src="/assets/about.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="about-img1"
          />
        </div>
      </div>

      <hr />

      {/* OUR MISSION & OUR STRATEGY */}

      <div className="about-2">
        <div className="mission-txt">
          <h2>
            <FontAwesomeIcon icon={faCrosshairs} /> OUR MISSION
          </h2>
          <p>
            We aim to be the preferred partner in the industry, offering
            exceptional services across various construction sectors. Our
            objective is to consistently achieve successful project completions
            that meet our clients' expectations, delivering quality results,
            staying within budget, and adhering to project timelines.
          </p>
        </div>
        <div className="strategy-txt">
          <h2>
            <FontAwesomeIcon icon={faChessKnight} /> OUR STRATEGY
          </h2>
          <p>
            The success of Lantana services hinges on our demonstrated ability
            to delight customers by discerning optimal solutions within their
            budget constraints, delivering unparalleled service excellence.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* IMAGE */}

      <div className="img">
        <Image
          src="/assets/plans.jpg"
          alt="Lantana About 1"
          width={1000}
          height={500}
        />
      </div>

      {/* CORE VALUES */}

      <h1 className="value-head">
        <FontAwesomeIcon icon={faPenToSquare} /> Core Values
      </h1>

      <div className="value-container">
        <div className="value-item">
          <h2>Communication</h2>
          <p>
            In todays world, our instant access to information can undermine our
            ability communicate success for everything we do. Full transparency
            allows us, with our clients and project teams, to mitigate and
            control issues more effectively and efficiently, reducing any impact
            to the overall project.
          </p>
        </div>
        <div className="value-item">
          <h2>Consideration</h2>
          <p>
            {" "}
            Construction projects necessarily involve numerous people providing
            different serviceselse on the team. Consideration for all of those
            needs and perspectives must beat the forefront of any positive
            decision making process.
          </p>
        </div>
        <div className="value-item">
          <h2>Integrity</h2>
          <p>
            When Lantana Services was founded in 2020, we created our tag line:
            “Building with Integrity . This to us now as it was then. We firmly
            believe our unwavering commitment to this principle keeps us as an
            elite company within the construction industry
          </p>
        </div>
        <div className="value-item">
          <h2>Vision</h2>
          <p>
            Vision can be split between our clients and our company, but both
            are aligned. Client/Design Team Vision: From the outset of a
            project, be in lockstep with the and identify any areas of
            coordination or risk that may affect the outcome of the project.
          </p>
        </div>
      </div>

      <hr />

      {/* QUOTE */}
      <div className="quote-container">
        <p className="quote">
          "Our promise to our customers is to fullfill their ideas and dreams to
          the greatest of our ability by continuing to learn and improve."
        </p>
        <p className="quote-name">Jeannè van der Lingen</p>
        <p className="quote-founder">Founder of Lantana Services</p>
      </div>

      {/* CONTACT */}
      <div className="contact-container">
        <p className="contact">
          Looking for a partner in your next construction project?
        </p>
        <Link href="/contact">
          <button className="contact-btn">Enquire</button>
        </Link>
      </div>
    </div>
  );
};

export default about;
