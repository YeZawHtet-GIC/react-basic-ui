import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
        <h2 className="text-center mb-5">About Section</h2>
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
