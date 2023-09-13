import React, { useEffect } from "react";
import "./main.css";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import img7 from "../Assets/img7.jpg";
import img8 from "../Assets/img8.jpg";
import img9 from "../Assets/img9.jpg";
import img10 from "../Assets/img10.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "../Home/Home";
//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Paris",
    location: "France",
    grade: "CULTURAL",
    fees: "$5000",
    description:
      "Known as the city of love, Paris is famous for its iconic Eiffel Tower and rich history.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Tokyo",
    location: "Japan",
    grade: "ADVENTURE",
    fees: "$4500",
    description:
      "Experience the blend of modern and tradition in Tokyo's bustling streets.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Santorini",
    location: "Greece",
    grade: "RELAX",
    fees: "$650",
    description: "Famous for its stunning sunsets and white-domed buildings.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "ADVENTURE",
    fees: "$800",
    description: "A historical sanctuary and a UNESCO World Heritage site.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Rome",
    location: "Italy",
    grade: "CULTURAL",
    fees: "$550",
    description:
      "Dive into history by visiting the ancient ruins and taste the exquisite Italian cuisine.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Maldives",
    location: "Maldives",
    grade: "RELAX",
    fees: "$1000",
    description:
      "A tropical paradise known for its blue lagoons and coral reefs.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "ADVENTURE",
    fees: "$530",
    description: "Known for its Table Mountain and rich biodiversity.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Sydney",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$720",
    description:
      "Experience the iconic Sydney Opera House and vibrant culture.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Dubai",
    location: "UAE",
    grade: "LUXURY",
    fees: "$900",
    description: "A city known for luxury shopping and modern architecture.",
  },
];

const Main = ({ price }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const filteredData = Data.filter(
    (item) => parseInt(item.fees.slice(1)) <= price
  );

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {filteredData.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade flex">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    <span>DETAILS</span>
                    <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
