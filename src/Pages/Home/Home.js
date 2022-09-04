import React from "react";
import Announcement from "./Banner/Announcement/Announcement";
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
      <Announcement></Announcement>
      <Banner></Banner>
      <Tools></Tools>
      <BuisnessSummary></BuisnessSummary>
      <FeatureService></FeatureService>
      <TakeService></TakeService>
      <Reviews></Reviews>
      <BasicInfo></BasicInfo>
      <ContactUsHome></ContactUsHome>
    </div>
  );
};

export default Home;
