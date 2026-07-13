import React from "react";
import Banner from "../../components/Banner/Banner";
import Stat from "../../components/Stat/Stat";
import TrendApp from "../../components/TrendApp/TrendApp";
import { useLoaderData } from "react-router";

const Home = () => {
  const softwareData = useLoaderData();
  console.log(softwareData);
  return (
    <div className="bg-[#F1F5E8]">
      <Banner></Banner>
      <Stat></Stat>
      <TrendApp softwareData={softwareData}></TrendApp>
    </div>
  );
};

export default Home;
