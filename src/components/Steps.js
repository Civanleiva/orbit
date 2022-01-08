import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: '1',
      title: 'Discussion of the idea',
      description: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.'
    },
    {
      number: '2',
      title: 'Handcrafted Templates',
      description: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.'
    },
    {
      number: '3',
      title: 'Testing for Perfection',
      description: 'Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.'
    }
  ];

  return (
    <div className="steps">
      {
        steps.map((step) => (
          <div className="step">
            <div className="step-number">
              {step.number}
            </div>
            <h2 className="step-title">
              {step.title}
            </h2>
            <p className="step-description">
              {step.description}
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default Steps;
