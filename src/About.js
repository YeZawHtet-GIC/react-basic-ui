import React from "react";
import about from "./images/Ngwe-Saung.jpg";
export default function About() {
  return (
    <div className="container-fluid rounded" data-aos="fade-in" style={{ backgroundColor:'#F0F0F0', padding: "3% 8%" }}>
      <h2 className="text-center mb-5"><span className="border-bottom border-warning border-3 p-2">About Section</span></h2>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col" data-aos="fade-right">
          <img src={about} alt="Image" className="img-fluid rounded" />
        </div>
        <div className=" col"data-aos="fade-left" style={{ paddingLeft:'50px' }}>
          <h5>WELCOME TO MY BLA BLA TOURS LTD.</h5>
          <p style={{ lineHeight:'2' }}>
            Established in 1991, My Bla Bla Tours Ltd. stands as a prominent
            travel agency and tour operator in Myanmar, headquartered in the
            vibrant city of Yangon. 
          </p>
          <h5 className="mt-5">OUR JOURNEY</h5>
          <p className="mt-3" style={{ lineHeight:'2' }}>
            For over three decades, My Bla Bla Tours Ltd. has been a beacon in
            the realm of travel, seamlessly blending tradition and innovation.
            Our commitment to excellence and passion for exploration have
            solidified our position as leaders in the travel industry.
          </p>
        </div>
      </div>
    </div>
  );
}
