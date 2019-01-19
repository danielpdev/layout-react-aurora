import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import CustomButton from './../utils/Button';

const usePercentageEffect = (maxValue) => {
  const [discount, setDiscount] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
        if(discount < maxValue)  
          setDiscount(discount+1);
      
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [discount]);
  return [discount, setDiscount];
};



const Discount = () => {
  const [discount, setDiscount] = usePercentageEffect(30);
  
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => setDiscount(0)}>
          <div className="discount_percentage">
            <span>{discount}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
            <div className="discount_description">
              <h3>description of the discount</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
              <CustomButton content="GET THE DISCOUNT" bck="#ffa800" color="#fff" link="http://google.com"/>
            </div>
            </div>

        </Slide>

      </div>
    </div>
  )
};

export default Discount;