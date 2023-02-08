import {useState, useEffect} from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import HeroDisplay from "./components/HeroDisplay";
import Form from "./components/Form";
import ReactAudioPlayer from "react-audio-player";
import song from "./audio/streetFighter2Theme.mp3";

export default function App() {
  //variable with your apiKey for Superhero DB
  //const apiKey = "106094302402171";    
  //State to hold movie data
  const [hero, setHero] = useState(null);

  //Function to getMovies
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
    getHero("donatello");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
        <h1 className="header">Welcome to the Superhero Battle Dome!</h1>
        <h1 className="header">Two may enter, but only one can leave--choose 2 Superhero's to fight!</h1>
        <div className="audioPlayer">
          <ReactAudioPlayer
            src={song}
            controls
          />
          </div>
      <Form herosearch={getHero} />
      <HeroDisplay hero={hero} />
     
    </div>
  );
};