import React from "react";
import Video from "../../components/video/Video";
import Home_Page_Navbar from "../../components/homepagenavbar/HomePageNavbar";
import Counter from "../../components/counter/Counter";
import Mix from "../../components/charts/genelchart";
import Select from '../../components/select/select'

const Index = () => {
  return (
    <React.Fragment>
      <Video />
      <Home_Page_Navbar />
      <Counter/>
      <Mix/>
      <Select/>
    </React.Fragment>
  );
};

export default Index;
