import React from 'react';
import firstImage from '../images/pizza.jpg';
import secondImage from '../images/second-pizza.jpg';

const Team = () => {
  return (
    <div className="team">
      <img className="team-images left" src={firstImage} alt="Our team" />
      <div className="team-details">
        <h2 className="team-title">WE ARE A DIGITAL MEDIA AGENCY.</h2>
        <p className="team-description">
          We are idea-driven, working with a strong focus on design and user experience.
          Our projects should engage your audience, we want to create wonderful digital things that people love to be part of and use.
          That's what your brand and audience deserve.
        </p>

        <a target="_blank" href="https://ep01.epimg.net/verne/imagenes/2019/10/23/mexico/1571858968_884386_1571859107_noticia_normal.jpg" rel="noreferrer">
          <div className="team-meet-button">
            MEET OUR TEAM
          </div>
        </a>
      </div>
      <img className="team-images right" src={secondImage} alt="Our team" />
    </div>
  );
};

export default Team;
