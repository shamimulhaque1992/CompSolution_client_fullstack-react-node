import React from "react";
import Banner from "./Banner/Banner";
import BasicInfo from "./BasicInfo/BasicInfo";
import BuisnessSummary from "./BuisnessSummary/BuisnessSummary";
import ContactUsHome from "./ContactUsHome/ContactUsHome";
import FeatureService from "./FeatureService/FeatureService";
import Reviews from "./Reviews/Reviews";
import TakeService from "./TakeService/TakeService";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <BasicInfo></BasicInfo>
      <Tools></Tools>
      <BuisnessSummary></BuisnessSummary>
      <FeatureService></FeatureService>
      <TakeService></TakeService>
      <Reviews></Reviews>
      <ContactUsHome></ContactUsHome>
    </div>
  );
};

export default Home;
