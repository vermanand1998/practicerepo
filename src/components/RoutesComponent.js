import React from "react";
import { Navigate, Route, Routes } from "react-router";
import ReactState from "./reactstate/reactstate";
import FormComponent from "./reactform/reactForm";
import SeatMap from "./flightSeatMap/SeatMap";
import Header from "./homepage/home";
import CompOne from "./component1/componentone";
import CompTwo from "./component2/componenttwo";
import Footer from "./footer/fotter";
import Context from "./contextAPI/context";
const RoutesComponent = () => {
  return (
    <>
      <Header/>
      <br></br><br></br>
      <Routes>
        <Route path="/" element={<ReactState />} />
        <Route path="reactForm" element={<FormComponent />} />
        <Route path="seat" element={<SeatMap />} />
        <Route path="compo1" element={<CompOne/>} />
        <Route path="compo2" element={<CompTwo/>} />
        <Route path="Context" element={<Context/>} />
        
      </Routes>
      <br></br><br></br>
      <Footer />
    </>
  );
};

export default RoutesComponent;