import React from 'react';


const Features = () => {
  const features = [
    {
      title: 'Digital Branding',
      description: 'We can help you find the precise message to clearly speak to who you are as a company.'
    },
    {
      title: 'Web Interactive',
      description: 'Our websites look great, but each page has a clearly defined conversion goal.'
    },
    {
      title: 'Graphic Design',
      description: 'We interlace our creative with solid marketing and branding principle. A strong brand.'
    }
  ]

  return (
    <div className="features">
      {
        features.map((feature) => {
          return (
            <div className="features-item" key={feature.title}>
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          )
        })
      }
    </div>

  );
};

export default Features;
