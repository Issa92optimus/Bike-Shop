import Hero from "../components/Hero";
import BookBike from "../components/BookBike";
import PlanTrip from "../components/PlanTrip";
import PickBike from "../components/PickBike";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookBike />
      <PlanTrip />
      <PickBike />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
