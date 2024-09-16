import React from 'react';
import Slider from 'react-slick';
import { Parallax } from 'react-parallax';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';  


const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#333',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        color: 'white',
        fontSize: '24px',
        right: '15px',
        zIndex: 1,
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#333',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        color: 'white',
        fontSize: '24px',
        left: '15px',
        zIndex: 1,
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
};


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


const imageSlides = [
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 id="welcome">Welcome to Our Travel Photos Website</h1>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#welcome">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#parallax">Parallax</a></li>
          <li><a href="#slider">Slider</a></li>
        </ul>
      </nav>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>This is a travel photos website where you can explore beautiful travel destinations through stunning images. Our goal is to inspire your next adventure.</p>
      </section>

      <Parallax 
        id="parallax"
        blur={{ min: -10, max: 10 }} 
        bgImage="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        strength={500} 
        className="parallax-section"
      >
        <div className="parallax-content">
          <h2>About the Parallax</h2>
          <p>Experience a modern design with a dynamic background that shifts as you scroll, enhancing the visual appeal of our website.</p>
        </div>
      </Parallax>

      <div id="slider" className="slider-section">
        <h2>Image Slider</h2>
        <Slider {...sliderSettings}>
          {imageSlides.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Travel Photos Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
