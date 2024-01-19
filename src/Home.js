import React from "react";
import "./Home.css";
import highLight from "./images/Highlights-Myanmar.jpg";
export default function Home() {
  return (
    <div
      className="row row-cols-1 row-cols-lg-2"
      style={{ padding: "5% 8%"}}
    >
      <div
        className="col home-left text-muted" data-aos="fade-right"
        
      >
        <p className="pb-2" style={{
          lineHeight: "2",
          paddingTop: "2rem",
          fontSize: "1.5rem"
        }}>
        WELCOME from Bla
        Bla Tours Ltd.
        </p>
        <p className="pb-3" style={{
          lineHeight: "2",}}>Established in July 1991 under Ministry of Hotel and
        Tourism License No KHA-0008, is a leading Tour Operator in Myanmar.</p> 
        <div>
          <a href="#" className="btn btn-outline-primary mb-5 py-3 px-3">
            Explore More
          </a>
        </div>
      </div>
      <div className="col home-right mb-3" data-aos="fade-left">
        <img
          src={highLight}
          alt="Home Section Image"
          className="w-100 h-100 rounded"
        ></img>
      </div>
    </div>
  );
}
