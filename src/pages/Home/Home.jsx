import "./Home.css";
// import Footer from "../../components/Footer/footer";
import Footer from "../../components/footerSection/Footer";
import Showcase2 from "../../components/showcase/Showcase2";
import WelcomeHome2 from "../../components/Welcomehome/WelcomeHome2";
import Service from "../../components/Service/Service";
import Youtube from "../../components/youtube/Youtube";
import Benifit from "../../components/benifit/Benifit";
import Gallery2 from "../../components/Gallery/Gallery2";
import ChoosePlane from "../../components/choosePlane/ChoosePlane";
import GetStart from "../../components/getStart/GetStart";
import Contact from "../../components/contact/Contact";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Faq from "../../components/LandingPage/Faq";
import OurPartners from "../../components/OurPartners/OurPartners";
import {  useParams } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const { id } = useParams();

  const scrollTo = (target) => {
    const otherComponentElement = document.getElementById(target);

    if (otherComponentElement) {
      otherComponentElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    console.log("ID IS : " + id);
    if (id !== undefined) {
      setTimeout(() => {
        scrollTo(id);
      }, 2000);
    } else {
      console.log("No ID in the URL");
    }
  }, []);

  return (
    <>
      <div className="pageBgColor">
        <Showcase2 />
        <WelcomeHome2 />
        <Youtube />
        <GetStart />
        <ChoosePlane />
        <Service />
        <OurPartners />
        <Benifit />
        <Gallery2 />
        <Faq />
        <Contact />
        <Footer />
        <MessengerCustomerChat pageId="171684687116166" />
      </div>
    </>
  );
};

export default Home;
