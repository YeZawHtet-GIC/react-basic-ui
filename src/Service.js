import React from 'react'
import vape1 from './images/sightseeing.png';
import vape2 from './images/cruises.png';
import vape3 from './images/package-tour.png';
export default function Service() {
  return (
    <div style={{ padding: "3% 8%", marginTop:'2rem'}}>
      <h2 className="text-center mb-4"><span className="border-bottom border-success border-3 p-2">Service Section</span></h2>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-lg-3 p-5">
          <div className="col d-flex justify-content-center align-items-center" data-aos="fade-up">
            <div className=" rounded" style={{ width:'33.33%', height: '200px' }}>
              <img src={vape1} className="img-fluid rounded" alt="sightseeing photo"/>
              <h4 className="text-center mt-3">
                <a href="#" className="text-decoration-none text-dark">Sightseeing</a>
              </h4>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center" data-aos="fade-up">
            <div className=" rounded"  style={{ width:'33.33%', height: '200px' }} >
              <img src={vape2} className="img-fluid rounded" alt="cruises photo"/>
              <h4 className="text-center mt-3">
                <a href="#" className="text-decoration-none text-dark">Cruises</a>
              </h4>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center" data-aos="fade-up">
            <div className=" rounded" style={{ width:'33.33%', height: '200px' }} >
              <img src={vape3} className="img-fluid rounded" alt="package tour photo"/>
              <h4 className="text-center mt-3">
                <a href="#" className="text-decoration-none text-dark">Package Tour</a>
              </h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
