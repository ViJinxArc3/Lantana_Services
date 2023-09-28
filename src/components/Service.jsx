import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faHouse,
  faRoad,
  faHelmetSafety
} from "@fortawesome/free-solid-svg-icons";


const Service = () => {
  return (
    <div className="service_container">
      {/* HEADER */}
      <div className="service-image"></div>
      <section className="service-head">
        <div className="service-desc">
          <h1 className="head_text">Our Services</h1>
          <p className="service-desc">We evolved into a reputable firm capable of undertaking substantial renovation and construction projects.</p>
        </div>
      </section>

      {/* Service Cards */}
        <h1></h1>
      <div className="service-cards">
      <div className="card">
        <h2><FontAwesomeIcon icon={faHammer} /> BUILDING</h2>
        <p>From modest expansions to constructing double-story houses from the ground up, there is no project too monumental for our adept team of builders.</p>
    </div>

    <div className="card">
        <h2><FontAwesomeIcon icon={faHouse} /> RENOVATIONS</h2>
        <p>We have successfully undertaken a spectrum of projects, ranging from single-room renovations to comprehensive transformations of residential and commercial spaces. Our expertise encompasses a wide array of skills, including tiling, plastering, painting, carpentry, ceiling work, and door installations, making us your all-in-one solution.</p>
    </div>
   
   
    <div className="card">
        <h2><FontAwesomeIcon icon={faRoad} /> PAVING / CONCRETE FLOORS</h2>
        <p>We have expertly executed various styles of paving and concrete floors multiple times, showcasing our mastery in this craft.</p>
    </div>

    <div className="card">
        <h2><FontAwesomeIcon icon={faHelmetSafety} /> EARTHWORKS / SITE PREPARATION</h2>
        <p>We boast an array of heavy machinery, including TLBs, excavators, tippers, and cranes, all expertly operated by professionals. These machines are instrumental in site preparation, debris removal, surface leveling, trench excavation, and the safe handling of heavy materials.</p>
    </div>
      </div>

{/* OTHER SERVICES */}

<div className="about-1">
<div className="about-img-container">
          <Image
            src="/assets/other-services.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="about-img1"
          />
        </div>
        <div className="about-text">
          <h1>Other Services</h1>
          <p>
          At Lantana Services, we elevate our business by making client needs and requirements our focal point. That's why we go the extra mile, offering a diverse range of services that encompass both exterior and interior solutions. From painting to carpentry, our commitment is unwavering as we diligently strive to meet and exceed your unique needs.
          </p>
        </div>
       
      </div>

      <hr />
      
{/* OTHER SERVICES - DESCRIPTIONS */}

    {/* ROOF REPAIRS */}
<div className="about-1">

        <div className="about-text">
          <h1>Roof repairs</h1>
          <p>
          We take pride in being your trusted partner for all your roof repair needs. With years of industry expertise, we understand that a reliable roof is essential to protect your home or business. Our dedicated team of skilled professionals is committed to providing top-notch roof repair services that stand the test of time. Whether it's a minor leak, shingle replacement, or extensive damage repair, we've got you covered. We use the latest techniques and high-quality materials to ensure the longevity and durability of your roof, offering peace of mind and safeguarding your property from the elements. At [Your Company Name], we're not just repairing roofs; we're preserving your investment and ensuring the safety and comfort of your space. Choose us for excellence in roof repairs – your satisfaction is our top priority.
          </p>
        </div>
        <div className="about-img-container">
          <Image
            src="/assets/roof-repairs.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="about-img1"
          />
        </div>
       
      </div>

      {/* PAINTING */}

      <div className="about-1">
      <div className="about-img-container">
          <Image
            src="/assets/painting.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="about-img1"
          />
        </div>
        <div className="about-text">
          <h1>Painting</h1>
          <p>
          Transforming spaces with a stroke of creativity and precision is our forte at Lantana Services. Our painting services, both for interiors and exteriors, are designed to breathe new life into your residential or commercial properties. With an eye for detail and a commitment to quality, our experienced team of painters crafts impeccable finishes that stand the test of time. Whether you're looking to refresh the look of your home's interior, enhance your property's curb appeal, or add a touch of elegance to your office space, we've got you covered. We take pride in using top-notch paints, tools, and techniques to ensure a flawless result. At Lantana Services, we don't just paint walls; we transform spaces, leaving behind a vibrant and lasting impression. 
          </p>
        </div>
      </div>

      {/* CARPENTRY */}
      <div className="about-1">
    
        <div className="about-text">
          <h1>Carpentry</h1>
          <p>
          Our carpentry services are the cornerstone of craftsmanship and precision. With a dedication to detail and a passion for woodworking, our expert carpenters bring your vision to life, one piece at a time. Whether it's custom cabinetry, intricate trim work, or bespoke furniture, we excel in creating functional and aesthetically pleasing solutions for your residential or commercial needs. Our team's mastery extends from traditional to modern styles, ensuring that your project aligns perfectly with your unique tastes and requirements. We take pride in using premium materials and time-honored techniques to deliver enduring, one-of-a-kind creations that stand out in any space. Elevate your interiors with the artistry of our carpentry services, and experience the transformation of your space into a work of art. Choose us to bring craftsmanship and elegance to every corner of your project. 
          </p>
        </div>
        <div className="about-img-container">
          <Image
            src="/assets/carpentry.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="about-img1"
          />
        </div>
      </div>

      <hr />

      <div className="library-header">
          <h1>Image Library</h1>
          </div>


      {/* IMAGE LIBRARY */}
      <div className="image-library">
      <Image
            src="/assets/flooring.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
           <Image
            src="/assets/carpentry-2.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
           <Image
            src="/assets/welding-2.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
           <Image
            src="/assets/building.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
           <Image
            src="/assets/building-2.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
           <Image
            src="/assets/building-3.jpg"
            alt="Lantana About 1"
            width={300}
            height={600}
            className="img-library"
          />
      </div>

      {/* CONTACT BUTTON */}
      <div className="contact-container">
        <p className="contact">
        Find out how we can add value to your Project.
        </p>
        <Link href="/contact">
          <button className="contact-btn">Enquire</button>
        </Link>
      </div>
    </div>
  )
}

export default Service