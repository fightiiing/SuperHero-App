import './App.css';
import {useState, useEffect} from "react";
import HeroDisplay from "./components/HeroDisplay";
import Form from "./components/Form";
import HeroDisplay2 from "./components/HeroDisplay2";
import Form2 from "./components/Form2";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from "./audio/streetFighter2Theme.mp3";
import Fight from './components/Fight';

export default function App() {
  //set state to make custom message for an undefined/not found fetch return from api
  let [hasError, setHasError] = useState("Hero not in database or name misspelled");

  //Hero card 1   
   const [hero, setHero] = useState(null);
  
   const getHero = async (searchTerm) => {
      // make fetch request and store response
      try{

      const response = await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTerm}` );
      // Parse JSON response into a javascript object
      const data = await response.json();
      
      if (data.results[0].name===undefined) {
        throw new Error();
      }
      //set the Hero state to hero
      setHero(data);
      
    } catch {
      alert(hasError)
      setHasError("Hero not in database or name misspelled");
    }
  
  };
  
  const superArr =["michelangelo", "raphael", "cyborg","silver surfer", "iceman","indiana jones","leonardo", "donatello", "robin","godzilla", "king kong", "superman", "spider-man", "jar jar binks", "luke skywalker", "thanos", "t-1000", "captain planet", "hulk", "han solo", "yoda", "darth vader", "ironman", "beast", "wolverine", "cyclops", "juggernaut", "magneto", "batman", "gambit", "rogue", "punisher", "magus", "predator", "alien", "deadpool", "doctor strange", "t-850", "t-800", "aquaman", "apocalypse", "groot", "batgirl", "supergirl", "captain marvel", "captain america", "cable","blob", "bishop", "catwoman", "star-lord", "kool-aid man", "master chief", "vision", "scarlet witch", "she-hulk", "she-thing", "swamp", "stormtrooper", "king shark", "alan scott","darkseid","brainiac","odin","fin fang","rambo","one punch man","jessica jones","daredevil", "dr manhattan", "doctor octopus", "drax", "wonder woman", "ant-man", "wasp", "doctor doom", "picard", "spock", "colossus", "storm", "spider-woman", "james bond", "black panther", "blade", "red skull", "sabretooth", "riddler", "penguin", "joker", "harley quinn", "harry potter", "invisible woman", "human torch", "thing", "lex luthor", "chuck norris", "martain manhunter", "galactus", "gamora", "ghost rider", "rocket racoon", "flash", "firelord","miss martian", "loki", "mister sinister","two-face","mister fantastic","mantis","t-x","thor girl","moon knight", "mister freeze","venom", "carnage", "vegeta","general zod","etrigan","falcon", "havok","aquababy","nightcrawler", "nick fury", "abomination", "astro boy", "goku", "luke cage" ];
  const randomElement = superArr[Math.floor(Math.random() * superArr.length)];

    useEffect(() => {
      getHero(randomElement);
    }, []);
  
    //Second Hero Card
    const [hero2, setHero2] = useState(null);
   
    //Function to getHero2
    const getHero2 = async (searchTerm2) => {

      // make fetch request and store response
      try{

      const response2 = await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTerm2}` );
      // Parse JSON response into a javascript object

      const data2 = await response2.json();
      
      //error message for when entering in a name the database doesn't have or misspelled names. 
      if (data2.results[0].name===undefined) {
        throw new Error();
      }
      
      //set the Hero state to Hero2
      setHero2(data2);

      } catch {
        alert(hasError)
        setHasError("Hero not in database or misspelled");
      }
    };
  
    const randomElement2 = superArr[Math.floor(Math.random() * superArr.length)];
    useEffect(() => {
      getHero2(randomElement2);
    }, []);
  
    return (
      <div className="App">
          <div className="header">
            <div id="headerText">
            <span>Superhero<br />Street Fight!</span>
            </div>
          </div>
            
            <div className='form1'>
                <Form herosearch={getHero} />  
                <button className='randomButton' onClick={() =>{getHero(randomElement)}}>Random</button>  
            </div>

              <div className='hero1'>
                <HeroDisplay hero={hero} />
              </div>    
             
              <div className='form2'>
                <Form2 herosearch={getHero2} />
                <button className='randomButton' onClick={() =>{getHero2(randomElement2)}}>Random</button>
              </div>
              <div className='hero2'>
                <HeroDisplay2 hero2={hero2} />
              </div>
            
        <div className='footer'>
            <Fight hero={hero} hero2={hero2} />
          <div className="audioPlayer">
            <AudioPlayer
            src={song}
            showFilledVolume={true}
             />
            </div>
        </div>
      </div>
    );
  };