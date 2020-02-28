import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';


function HeroComponent(props) {

  return (
    <div className="Hero">
      <Grid container>
        <Grid item xs={4}>
       <img className="Picture" src={props.img} alt="hero"></img>
       </Grid>
       <Grid item xs={8}>
        <h4>{props.name}</h4>
      <p>{props.power && props.power.name[0].text}</p>
        </Grid>
    </Grid>
  </div>
  );
}

export default HeroComponent;