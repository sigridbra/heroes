import React, { useEffect } from 'react';
import { accessDocument } from "prismic-utils";
import Button from '@material-ui/core/Button';
import HeroComponent from "HeroComponent";
import './App.css';

function HeroList() {

    const [heroes, setHeroes] = React.useState(null);
    useEffect(() => {
      accessDocument("hero").then(result => {
        return setHeroes(result);
      });
    }, []);

  return (
    <div className="HeroList">
      <Button>Get Heroes!</Button>
      {heroes &&
            heroes.map((section, i) => {
              return <HeroComponent hero={section} key={i} />;
            })}
    </div>
  );
}

export default HeroList;