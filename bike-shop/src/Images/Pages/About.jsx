import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="bike-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You pedal your bike and your adventure begins</h2>
              <p>
                Our Bike shop allows everyone to be able to buy or rent a bike and use it as he's or her own.We ensure that we provide exquisite taste
                to all of our clients with our various racing bikes.Some might find our charges abit high but that all comes due to the highly mainainance provided to each
                of our bikes and the love and care that the bikes are handled with.We hope that you get to know more about us as you cruise through our website.For any more info kindly reach
                out to us to our email and contacts provided.Thank you our belated customer and much regards go to our crew
                for making this dream become a reality.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="bike-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Bike Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="bike-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="bike-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a bike by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(254) 759-5154-50</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
