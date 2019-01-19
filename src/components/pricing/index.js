import React from 'react';
import usePricingData from './usePricingData';
import CustomButton from '../utils/Button';
import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
  const [offers] = usePricingData();
  return (
  <div className="bck_black">
    <div className="center_wrapper pricing_section">
      <h2> Pricing </h2>
      <div className="pricing_wrapper">
        {offers && offers.map(({delay, price, hours, desc}, index) => (
          <Zoom delay={delay} key={index}>
            <div className="pricing_item" >
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                <span>${price}</span><span>{hours} hours</span>
                </div>
                <div className="pricing_description">
                {desc}
                </div>
                <div className="pricing_buttons">
                  <CustomButton content="purchase" bck="#ffa800" color="white" />
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  </div>)
};

export default Pricing;