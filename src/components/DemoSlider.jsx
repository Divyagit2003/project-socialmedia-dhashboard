import React from 'react';

const DemoSlider = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ width: '100%', height: '500px' }}>
          <div className="carousel-item active">
            <img src='../assests/social2.jpg' className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src='../assests/social1.jpg' className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src='../assests/social3.jpg' className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default DemoSlider;
