import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) =>
{
  const scrollToElement = (element) => {
    scroller.scrollTo(element,{
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    props.onClose(false);
  };
  return (
      <SwipeableDrawer
      anchor="right"
      open={props.open}
      onClose={()=> props.onClose(false)}
      onOpen={()=> console.log("onOpen")}
    >
      <List>
          {['Event starts in', 'Aurora NFO',
          'Highlights', 'Pricing', 'Location'].map((text, index) => (
          <ListItem button key={text} onClick={ () => scrollToElement(text)}>
          {text}
          </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
 )
};

export default SideDrawer;