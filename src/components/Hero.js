import React from 'react';
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';

import firstSlide from '../images/man-contemplating-the-immortality-of-frog.jpg';
import secondSlide from '../images/imagine-having-friends.jpg';
import thirdSlide from '../images/smoking-kills.jpg';

const Hero = () => {
  const heroSliderSettings = {
    slidingDuration: 250,
    slidingDelay: 100,
    shouldAutoplay: true,
    shouldDisplayButtons: true,
    autoplayDuration: 5000,
    height: "100vmax"
  };
  const overLayContainerStyle = {
    color: "white",
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    textAlign: 'center',
  };

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={ heroSliderSettings }
    >
      <OverlayContainer style={overLayContainerStyle}>
        <h2 className="brand-title">ORBIT</h2>
        <h3 className="brand-description">idk algo más</h3>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: firstSlide,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: secondSlide,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: thirdSlide,
          backgroundAttachment: "fixed"
        }}
      />
      <Nav />
    </HeroSlider>
  );
}

export default Hero;


