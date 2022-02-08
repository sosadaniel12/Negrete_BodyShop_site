import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footer" id="Contact">
      <div className="contact">
        <div className="info border">
          <h1 className="contact-header">Contact</h1>
          <p>
            Tel:{" "}
            <a href="tel:9032430633" className="info-links">
              (903) 243-0633
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:luisnegrete50@gmail.com" className="info-links">
              luisnegrete50@gmail.com
            </a>
          </p>

          <a href="tel:9032430633" className="phone-button">
            <button className="button">Call Now</button>
          </a>
        </div>
        <div className="contact-location border">
          <h1 className="contact-header">Location</h1>
          <p> 3274 Highway 11 E, Sulphur Springs, TX 75482</p>
        </div>
        <div className="hours border ">
          <h1 className="contact-header">Hours</h1>
          <p>Monday - Friday: 8am - 5pm</p>
          <p>Saturday: 8am - 2pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <p className="copyright">Copyright © 2022 Negrete Custom Paint</p>
    </footer>
  );
};

export default Contact;
