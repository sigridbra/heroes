import React, { useState, useEffect } from 'react';
import no from './imgs/no.svg';
import gb from './imgs/gb.svg';
import './App.css';
import HeroList from "./HeroList.jsx"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function App() {

  const [norwegian, setNorwegian] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Grid container>
          <Grid item xs={7}>
            <h5>Prismic demo 2020</h5>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => setNorwegian(!norwegian)}>{norwegian ? <img src={no} alt="no" className="Flag"/> : <img src={gb} alt="gb" className="Flag"/> }</Button>
          </Grid>
        </Grid>
      </header>
      <Grid container   justify="center"  alignItems="center">
        <Grid item xs={5}>
      <HeroList lang={norwegian ? 'no': 'en-gb'}></HeroList>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
