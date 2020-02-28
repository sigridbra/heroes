import React, { useEffect } from 'react';
import { accessDocument } from "./prismic-utils.js";
import Button from '@material-ui/core/Button';
import HeroComponent from "./HeroComponent.jsx";
import './App.css';

function HeroList(props) {

    const [heroes, setHeroes] = React.useState(null);
    useEffect(() => {
      accessDocument("superhero").then(result => {
          console.log(result);
        return setHeroes(result);
      });
    }, []);
    const [Powers, setPowers] = React.useState(null);
    useEffect(() => {
      accessDocument("power", props.lang).then(result => {
          console.log(result);
        return setPowers(result);
      });
    }, [props.lang]);
    const [Title, setTitle] = React.useState(null);
    useEffect(() => {
      accessDocument("title", props.lang).then(result => {
          console.log(result);
        return setTitle(result);
      });
    }, [props.lang]);

  return (
    <div className="HeroList">
      <h1>{Title != null && Title[0].title}</h1>
      {heroes &&
            heroes.map((section, i) => {
               let power = Powers.find(power => section.power.uid === power.iid)
              return <HeroComponent hero={section} name={section.name[0].text} img={section.picture.url} power={power} key={i} />;
            })}
    </div>
  );
}

export default HeroList;