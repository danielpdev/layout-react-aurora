import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11132.956399844792!2d21.22325284976806!3d45.766398278616826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745679b6e79ee41%3A0x26a17360fdf4543e!2sIulius+Mall!5e0!3m2!1sen!2sro!4v1547612330598" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>
            <div className="location_tag">
            <div>Location</div>
            </div>
            
        </div>
    );
};

export default Location;