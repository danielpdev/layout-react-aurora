import React from 'react';

import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous header_logo_title">
                    The Aurora
                </div>
                <div className="footer_copyright">
                The aurora 2019. All rights reserved!
                </div>
            </Fade>
        </footer>
    )
};

export default Footer;