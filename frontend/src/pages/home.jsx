import loungeImage from "../assets/lounge.jpg";
import barImage from "../assets/bar-area.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="content-item">
        <h3 className="home-header">Lounge</h3>
        <div>
          <p>
            The lounge area is reserved for our exclusive guests—though we use
            the term “exclusive” rather loosely. In reality, just tell the
            doorman to go fuck himself, and you’re in.
          </p>
        </div>
      </div>
      <div className="content-item">
        <h3 className="home-header">Bar</h3>
        <p>
          It’s a bar. Not sure what else you want me to say. Grab a seat, be
          whoever you want, maybe find a partner (or don’t). Just follow the
          only rules that matter: order a drink and tip the bartender.
        </p>
      </div>
      <div className="images">
        <img src={loungeImage} alt="ai generated lounge area" />{" "}
        {/* ai created image */}
        <img src={barImage} alt="ai generated bar area" />{" "}
        {/* ai created image */}
      </div>
      <div className="content-item">
        <h3 className="home-header">Service</h3>
        <p>
          Service? Yeah, we’ve got it covered. The team’s here to make sure
          you’re good—nothing fancy, just what you need. Food’s solid, and if
          you need anything, just let us know. We’re here for you.
        </p>
      </div>
      <div className="content-item">
        <h3 className="home-header">Anonymity</h3>
        <div className="anon-div">
          <p>who...?</p>
          <p className="btm-left">cares</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
