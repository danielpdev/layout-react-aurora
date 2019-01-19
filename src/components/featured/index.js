import React from 'react';
import Carrousel from './Carrousel';
import TimeUtil from './TimeUtil';
const Featured = (props) => {
    return (
        <div style={{position: 'realative'}}>
            <Carrousel/>
            <div className="aurora_moto">
                <div className="wrapper">
                Amazing Views
                </div>            
            </div>
            <TimeUtil/>
        </div>
    )
};

export default Featured;    