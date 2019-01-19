import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

const Header = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }
    useEffect(() => {
        const handleScroll = (event) => {
            if(window.scrollY > 0)
                setHeaderShow(true);
            else
                setHeaderShow(false);

        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []); // Empty array ensures that effect is only run on mount and unmount
    
    return (
        <AppBar position="fixed"
        style={{
            backgroundColor: headerShow ? '#2f2f2f': 'transparent',
            boxShadow: 'none',
            padding: '10px 0px'
        }}>
        <Toolbar>
            <div className="header_logo">
                <div className="font_righteous header_logo_title">
                World Aurora</div>
                <div className="header_logo_subtitle">
                Enjoy stunning experiences</div>
            </div>
            <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={()=> toggleDrawer(true)}>
                <MenuIcon open={drawerOpen} />
            </IconButton>
            <SideDrawer
            open={drawerOpen}
            onClose={(value)=> toggleDrawer(value)}></SideDrawer>
        </Toolbar>
        </AppBar>
    );
}

export default Header;