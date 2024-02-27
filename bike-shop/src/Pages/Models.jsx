import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import BikeImg1 from "../images/bike-big/Angel.png";
import BikeImg2 from "../images/bike-big/Ascent.png";
import BikeImg3 from "../images/bike-big/BlackAngel.png";
import BikeImg4 from "../images/bike-big/BMC.png";
import BikeImg5 from "../images/bike-big/BULIS.png";
import BikeImg6 from "../images/bike-big/Divine.png";
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Bike Models" />
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Angel</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh450</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Angel
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg2} alt="bike_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Ascent</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh500</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; VW
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg3} alt="bike_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p></p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh550</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Black Angel
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg4} alt="bike_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BMC</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh600</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; BMC
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg5} alt="bike_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>BULIS</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh650</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Stream
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={BikeImg6} alt="bike_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Divine</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>Ksh700</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; CC
                    </span>
                    <span style={{ textAlign: "right" }}>
                      4/5 &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-bike-side"></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <i className="fa-solid fa-bike-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Bike
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
}

export default Models;
