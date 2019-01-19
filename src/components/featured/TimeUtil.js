import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const TimeUtil = () => {

    const [deadline] = useState("Feb, 14, 2019");
    const [time, setTime] = useState({days: '0', hours: '0', minutes: '0', seconds: '0'});
    const getTimeUntil = () => {
        const actualTime = Date.parse(deadline) - Date.parse(new Date());
        if (actualTime < 0)
        {

        }
        else{
            const seconds = Math.floor((actualTime/1000)%60);
            const minutes = Math.floor((actualTime/1000/60)%60);
            const hours = Math.floor(actualTime/(1000*60*60)%24);
            const days = Math.floor(actualTime/(1000*60*60*24));
            setTime({days, hours, minutes, seconds});
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getTimeUntil();
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Aurora can be viewed at your location in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {time.days}
                        </div>
                        <div className="countdown_tag">
                            Days    
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {time.hours}
                        </div>
                        <div className="countdown_tag">
                            Hs    
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {time.minutes}
                        </div>
                        <div className="countdown_tag">
                            Mins    
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {time.seconds}
                        </div>
                        <div className="countdown_tag">
                            Sec    
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default TimeUtil;