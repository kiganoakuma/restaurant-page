import MapView from "../components/MapView";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-details">
        <p className="contact-info">
          <strong>Phone:</strong>{" "}
          <a className="contact-details-link" href="tel:+1234567890">
            +1 (234) 567-890
          </a>
        </p>
        <p className="contact-info">
          <strong>Email:</strong>{" "}
          <a
            className="contact-details-link"
            href="mailto:info@dine-restaurant.com"
          >
            info@dine-restaurant.com
          </a>
        </p>
        <p className="contact-info">
          <strong>Address:</strong> 9200 Sunset Blvd, Los Angeles, CA 90069
        </p>
      </div>{" "}
      <div className="mapView-container">
        <MapView />
      </div>
    </div>
  );
};

export default Contact;
