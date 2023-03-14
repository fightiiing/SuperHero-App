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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Modal from "./components/Modal";

export default function App() {
//Passing state for character health from Fight component to Display component
const [progressBar, setProgressBar] = useState(100)
const [progressBar2, setProgressBar2] = useState(100)

  //Hero card 1   
  const [hero, setHero] = useState(null);

  const getHero = async (searchOne) => {
      // make fetch request and store response
      try{  
      const response = isNaN(searchOne) ? await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchOne}` ) : await fetch( `https://superheroapi.com/api.php/106094302402171/${searchOne}` );
        const data = await response.json();
        
         if (data.response==="error") {
         throw Error()
        } 
        setHero(data);
      } catch(e) {
      alert("Superhero not in database or name misspelled");
    } 
  };

  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    //Random superhero on each page load
    useEffect(() => {
      getHero(randomNum(1,731));
    }, []);
  
    //Second Hero Card
    const [hero2, setHero2] = useState(null);
    const getHero2 = async (searchTwo) => {
      try{
      const response2 = isNaN(searchTwo) ? await fetch( `https://superheroapi.com/api.php/106094302402171/search/${searchTwo}` ) : await fetch( `https://superheroapi.com/api.php/106094302402171/${searchTwo}` );
      const data2 = await response2.json();
      //error message for when entering in a name the database doesn't have or misspelled names. 
      if (data2.response==="error") {
        throw Error();
       }
      setHero2(data2);
      } catch(e) {
        alert("Superhero not in database or name misspelled");
      }
    };  
    
    useEffect(() => {
      getHero2(randomNum(1,731));
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
            <Tippy content="Selects a random Superhero" >
            <button className='randomButton' onClick={() =>getHero(randomNum(1,731))}>Random</button>  
            </Tippy>
          </div>

          <div className='hero1'>
            <HeroDisplay hero={hero} progressBar={progressBar}/>
          </div>    
             
          <div className='form2'>
            <Form2 herosearch={getHero2} />
            <Tippy content="Selects a random Superhero" >
            <button className='randomButton' onClick={() =>getHero2(randomNum(1,731))}>Random</button>
            </Tippy>
          </div>
          
          <div className='hero2'>
            <HeroDisplay2 hero2={hero2} progressBar2={progressBar2}/>
          </div>
            
          <div className='footer'>
            <Fight hero={hero} hero2={hero2} setProgressBar={setProgressBar} setProgressBar2={setProgressBar2}/> 
                <Modal />
              <Tippy content="Press play for stage music!">
                <div className="audioPlayer">
                <AudioPlayer
                src={song}
                showFilledVolume={true}
                />
                </div>
              </Tippy>
          </div>
      </div>
    );
  };