import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div
        className="row row-cols-1 row-cols-lg-3 text-light px-4 py-4"
        style={{ backgroundColor: "#555" }}
      >
        <div className="col pb-sm-3" style={{ lineHeight: "2" }}>
          <div>
            <h4>TREASURE OF MYANMAR</h4>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Nature and Wildlife
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Community Visit
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Food & Drink
            </a>
          </div>
        </div>

        <div className="col pb-sm-3" style={{ lineHeight: "2" }}>
          <div>
            <h4> GOOD TO KNOW</h4>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Traditional Myanmar
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Myanmar Must Do
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none">
              Diving Must Do
            </a>
          </div>
        </div>
        <div className="col pb-sm-3" style={{ lineHeight: "2" }}>
          <div>
            <h4>CONTACT US</h4>
          </div>
          <div>
            <span>
              Office (33), Bla Bla of Hotels and Tourism, Bla Bla, Myanmar
            </span>
          </div>
          <div>Call Us: 09987654321</div>
          <div>Email Us: hello@gmail.com</div>
        </div>
      </div>
      <div
        className="row py-4 text-light text-center"
        style={{ backgroundColor: "#333" }}
      >
        <p>
          Copyright © 2024 Bla Bla Travels & Tours. Developed by Ye Zaw Htet
        </p>
      </div>
    </footer>
  );
}
