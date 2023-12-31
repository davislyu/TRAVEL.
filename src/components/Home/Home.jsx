import React, { useEffect, useState } from "react";
import "./home.css";
import video from "../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ price, setPrice }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"> </div>

      <video muted autoPlay loop src={video}></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city" className="city">
              Search your destination:
              <div className="input flex">
                <input type="text" placeholder="Enter name here..." />
                <GrLocation className="icon" />
              </div>
            </label>
          </div>
          <div className="dateInput">
            <label htmlFor="date" className="city">
              Select your date:
              <div className="input flex">
                <input type="date" placeholder="Enter date here..." />
                <GrLocation className="icon" />
              </div>
            </label>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${price}</h3>
            </div>
            <div className="input flex">
              <input
                onChange={(x) => setPrice(x.target.value)}
                type="range"
                max="5000"
                min="1000"
              />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BiLogoTripAdvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
