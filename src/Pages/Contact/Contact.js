import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <div className="info">
          <h1 className="section-header">Contact</h1>
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

          <a href="tel:9032430633">
            <button className="button">Call Now</button>
          </a>
        </div>
        <div className="contact-location">
          <h1 className="section-header">Location</h1>
          <p> 3274 Highway 11 E, Sulphur Springs, TX 75482</p>
        </div>
        <div className="hours">
          <h1 className="section-header">Hours</h1>
          <p>Monday - Friday: 8am - 5pm</p>
          <p>Saturday: 8am - 2pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <p className="copyright">Copyright © 2020 Negrete Custom Paint</p>
    </footer>
  );
};

export default Contact;
