import './App.css';
import {useState, useEffect} from "react";
import HeroDisplay from "./components/HeroDisplay";
import Form from "./components/Form";
import HeroDisplay2 from "./components/HeroDisplay2";
import Form2 from "./components/Form2";
import ReactAudioPlayer from "react-audio-player";
import song from "./audio/streetFighter2Theme.mp3";

export default function App() {
  //set state to make custom message for an undefined/not found fetch return from api
  let [hasError, setHasError] = useState("Hero not in database or misspelled");

  //Hero card 1   
   const [hero, setHero] = useState(null);
  
   const getHero = async (searchTerm) => {
      // make fetch request and store response
      try{

      const response = await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTerm}` );
      // Parse JSON response into a javascript object
      const data = await response.json();
      
      if (data.results[0].name==undefined) {
        throw new Error();
      }
      //set the Hero state to hero
      setHero(data);
      //let hero1 = data;
      //console.log(hero1);
    } catch {
      alert(hasError)
      setHasError("Hero not in database or misspelled");
    }
      
    };
  
    useEffect(() => {
      getHero("jar jar binks");
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
      if (data2.results[0].name==undefined) {
        throw new Error();
      }
      
      //set the Hero state to Hero2
      setHero2(data2);

      } catch {
        alert(hasError)
        setHasError("Hero not in database or misspelled");
      }
    };
  
    useEffect(() => {
      getHero2("t-850");
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
                  
              </div>
              <div className='hero1'>
                <HeroDisplay hero={hero} />
              </div>    
              <div className='vsImage'>
               
              </div>       
              <div className='form2'>
                <Form2 herosearch={getHero2} />
              </div>
              <div className='hero2'>
                <HeroDisplay2 hero2={hero2} />
              </div>
            
        <div className='footer'>
          <div className="audioPlayer">
            <ReactAudioPlayer
              src={song}
              controls
            />
            </div>
        </div>
      </div>
    );
  };