import {useState, useEffect} from "react";
import "./App.css";
import HeroDisplay from "./components/HeroDisplay";
import Form from "./components/Form";
import HeroDisplay2 from "./components/HeroDisplay2";
import Form2 from "./components/Form2";
import ReactAudioPlayer from "react-audio-player";
import song from "./audio/streetFighter2Theme.mp3";

export default function App() {

//Hero card 1
//const apiKey = "106094302402171";    
 const [hero, setHero] = useState(null);

 const getHero = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTerm}` );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setHero(data);
    //let hero1 = data;
    //console.log(hero1);
  };

  useEffect(() => {
    getHero("t-1000");
  }, []);

  //Second Hero Card
  const [hero2, setHero2] = useState(null);

  //Function to getHero2
  const getHero2 = async (searchTerm2) => {
    // make fetch request and store response
    const response2 = await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTerm2}` );
    // Parse JSON response into a javascript object
    const data2 = await response2.json();
    //set the Movie state to the movie
    setHero2(data2);
    //let hero1 = data;
    //console.log(hero1);
  };

  useEffect(() => {
    getHero2("michelangelo");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
        <div className="headerTop">
         <h1 className="header">Two enter, one leaves--choose 2 Superhero's to fight!</h1>
        <div className="audioPlayer">
          <ReactAudioPlayer
            src={song}
            controls
          />
          </div>
      
        <div className="forms">
      <Form herosearch={getHero} />
      <Form2 herosearch={getHero2} />
      </div>
      </div>
      <div className="heroContainer">
      <HeroDisplay hero={hero} />
        <h1 id="vs">VS.</h1>
      <HeroDisplay2 hero2={hero2} />
      </div>
        </div>
  );
};