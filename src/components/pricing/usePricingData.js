import React, { useState } from 'react';

const usePricingData = () => {
  const offer = [
    {
      delay: 500,
      price: 100,
      hours: 2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe"
    },
    {
      delay: 0,
      price: 200,
      hours: 5,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe"
    },
    {
      delay: 500,
      price: 300,
      hours: 10,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe"
    }
  ];
  return useState(offer)
};

export default usePricingData;