import "./styles.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Section1 from "./components/Section1";
import AboutUs from "./components/Section2";
import MultiCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import SeeAll from "./components/SeeAll";
import { about, Testimonials } from "./components/AboutUs";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Section1 />
      {about.map((item) => {
        return (
          <AboutUs
            id={item.SelectId}
            title={item.title}
            heading={item.heading}
            icon={item.icon}
            subTitle={item.subTitle}
            content={item.content}
            btnTitle={item.btnTitle}
          />
        );
      })}
      <SeeAll />
      <MultiCarousel />
      {Testimonials.map((item) => {
        return (
          <AboutUs
            id={item.SelectId}
            title={item.title}
            heading={item.heading}
            icon={item.icon}
            content={item.content}
            btnTitle={item.btnTitle}
          />
        );
      })}

      <Footer />
    </div>
  );
}
