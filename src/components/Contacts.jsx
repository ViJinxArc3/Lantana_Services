import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

//import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";


const Contacts = () => {
  let [loading, setLoading] = useState(false);
 
  useEffect (()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])


  return (
    <section className="contact-form">
      <div className="contact-img"></div>
      <div className="form-content">
        <h2>Contact us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illo eaque blanditiis commodi delectus, laborum sed nobis aliquid.</p>
      </div>
      <div className="form-container">
        <div className="contactInfo">
          <div className="form-box">
            <div className="form-text">
              <h3> <FontAwesomeIcon icon={faLocationDot} /> Address</h3>
              <p>Parys, Free state</p>
            </div>
          </div>
          <div className="form-box">
            <div className="form-text">
              <h3> <FontAwesomeIcon icon={faEnvelope} /> Email</h3>
              <p>admin@lantanaservices.co.za</p>
            </div>
          </div>
          <div className="form-box">
            <div className="form-text">
              <h3><FontAwesomeIcon icon={faPhone} /> Phone</h3>
              <p>+27 63 853 1370</p>
            </div>
          </div>
        </div>

        <div className="contactForm">

          {/* Send form submission to email
          Go to: https://web3forms.com/platforms/nextjs-contact-form to create your own
          access key to test out the form submission */}
          <form action="https://api.web3forms.com/submit" method="POST">

          {/* ADD YOUR ACCESS KEY IN THE VALUE STATEMENT AND SUBMIT YOUR FORM VIA THE WEB APP AND GO TO 
          TO YOUR EMAIL YOU USED TO GET A ACCESS KEY */}
          <input type="hidden" name="access_key" value="eea4e3b1-5297-4477-8e59-cf6264aeb2b2"/>
          {/* //--------------// */}

          <input type="hidden" name="from_name" value="Lantana Services"/>
            <h2>Send Enquiry or Request a Quote</h2>
            <div className="inputBox">
              <input 
              type="text" 
              required="required"
              name="fullName"
              />
              <span>Full name</span>
            </div>
            <div className="inputBox">
              <input 
                type="email"
                required="required"
                name="email"
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input 
                type="text"
                name="company"
              />
              <span>Company</span>
            </div>

            <div className="inputBox">
              <input 
              type="text" 
              required="required"
              name="number" 
              />
              <span>Number</span>
            </div>
            <div className="inputBox">
             <textarea 
             required="required"
             name="message" 
             ></textarea>
              <span>Your message</span>
            </div>
            <div className="formSubmit">
              {
                loading?
                <BeatLoader color={'#152934'} loading={loading} size={15}/>
                 :
                 <button>Submit</button>
             }
    </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contacts