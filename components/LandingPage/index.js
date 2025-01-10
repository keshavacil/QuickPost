import Common from "./Common";
import Footer from "./Footer";
import Overview from "./Overview";
import Pricing from "./Pricing";
import SocialPotential from "./SocialPotential";

const { default: Header } = require("./Header");

const LandingPage = () => {
  return (
    <>
      <Header />
      <Common
        title={"Streamline Your Social Media Efforts"}
        para={
          "Our all-in-one platform empowers creators to automate posts, schedule content, track analytics, and collaborate seamlessly. Save time and elevate your social media presence effortlessly."
        }
        button={"Get Started Today"}
        image="Images/LandingPage/VideoContainer.svg"
        showButton={true}
      />
      <SocialPotential />
      <Overview />
      <Common
        title={"Start Managing Your Social Media Like a Pro"}
        image="Images/LandingPage/VisualComp.svg"
        showButton={false}
      />
      <Pricing />
      <Common
        subtitle={"Celebrating Our Users' Success"}
        title={"Join a Community of Successful Creators"}
        para={
          "Our platform has helped countless creators streamline their social media efforts and achieve their goals."
        }
        image="Images/LandingPage/VideoContainerBottom.svg"
        showButton={true}
        button={"Join the Movement"}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
