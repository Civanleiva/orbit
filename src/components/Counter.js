import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
  const counterItems = [
    {
      counterNumber: 650,
      counterDescription: 'HAPPY CLIENTS'
    },
    {
      counterNumber: 987,
      counterDescription: 'WORKS COMPLETED'
    },
    {
      counterNumber: 350,
      counterDescription: 'AWARD WINNING (?)'
    },
    {
      counterNumber: 850,
      counterDescription: 'TELEPHONIC TALK (???)'
    }
  ];


  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (

        <div className="counter">
          {
            counterItems.map((item) => (
              <div className="counter-item">
                {
                  isVisible ?
                    <CountUp
                      end={item.counterNumber}
                      duration={1}
                      className="counter-number"
                    /> : null
                }
                <h5 className="counter-description">{item.counterDescription}</h5>
              </div>
            ))
          }
        </div>
      )}
    </VisibilitySensor>
  );
};

export default Counter;

