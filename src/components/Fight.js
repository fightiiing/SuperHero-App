import React from "react";
import { useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Fight({ hero, hero2 }) {
    
    let [gameText, setGameText] = useState("");
    let [defense1, setDef1] = useState(100);
    let [defense2, setDef2] = useState(100);
    const [nameFighter1, setNameFighter1] = useState("");
    const [nameFighter2, setNameFighter2] = useState("");

    // const textUpdater = () => {
    //     setGameText();
    // }

    const randomNum = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

     function handleClick() {
          
        let fighter1 = {
            nameFunc() {
            if(hero.results[0].id==="195" || hero.results[0].id==="405" || hero.results[0].id==="69"){
                return hero.results[1].name;
            } else if (hero.results[0].id==="428"){
                return hero.results[3].name;
            } else {
                return hero.results[0].name;
            }
            }, 
            durability:Number((hero.results[0].powerstats.durability)),
            combat:Number((hero.results[0].powerstats.combat)),
            intelligence:Number((hero.results[0].powerstats.intelligence)),
            strength:Number((hero.results[0].powerstats.strength)),
            speed:Number((hero.results[0].powerstats.speed)),
            power:Number((hero.results[0].powerstats.power)), 
            attackFunc(otherFighter){
                if (randomNum(1,100) < fighter1.accuracy){
                    setGameText((`${fighter1.name} attacks!`));
                    setDef2(defense2 -= fighter1.attack);
                    setGameText((`${fighter1.name} lands a good strike on ${otherFighter.name}!`));
                 } else {
                    setGameText((`A swing and a miss by ${fighter1.name}!`));
                }        
             }
        }
    
        let fighter2 = {
            nameFunc() {
            if(hero2.results[0].id==="195" || hero2.results[0].id==="405" || hero2.results[0].id==="69"){
                return hero2.results[1].name;
            } else if (hero2.results[0].id==="428"){
                return hero2.results[3].name;
            } else {
               return hero2.results[0].name;
            }
            },
            durability:Number((hero2.results[0].powerstats.durability)),
            combat:Number((hero2.results[0].powerstats.combat)),
            intelligence:Number((hero2.results[0].powerstats.intelligence)),
            strength:Number((hero2.results[0].powerstats.strength)),
            speed:Number((hero2.results[0].powerstats.speed)),
            power:Number((hero2.results[0].powerstats.power)),
            attackFunc(otherFighter){
                if (randomNum(0,100) < fighter2.accuracy){
                    setGameText((`${fighter2.name} attacks!`));
                    setDef1(defense1 -= fighter2.attack);
                    setGameText((`${fighter2.name} lands a good hit!`));
                } else {
                    setGameText((`${otherFighter.name} dodged the attack!`));
                }        
             }
        }
        fighter1.attack = ((fighter1.strength + fighter1.speed + fighter1.power) /(4+(fighter2.durability+fighter2.intelligence)/100));
        fighter1.accuracy = ((fighter1.combat + fighter1.intelligence) / 2);
      
        fighter2.attack = ((fighter2.strength + fighter2.speed + fighter2.power) /(4+(fighter1.durability+fighter1.intelligence)/100));            
        fighter2.accuracy = ((fighter2.combat + fighter2.intelligence) / 2);
               
        setNameFighter1(fighter1.name=fighter1.nameFunc());
        setNameFighter2(fighter2.name=fighter2.nameFunc());

        while (defense1 > 0 && defense2 > 0) {
                if (randomNum(0,100)>=50){
                    fighter1.attackFunc(fighter2);
                } else {
                    fighter2.attackFunc(fighter1);
                }
                if (defense2 <= 0 && defense1 > 0){
                    setGameText((`${fighter1.name} wins the fight over ${fighter2.name}!`))
                
                    let response = prompt(`${fighter1.name} won! Play again?`, "yes")
                 if(response==="yes"){
                            setDef1(100);
                            setDef2(100);
                            break;
                        } else{
                            setDef1(100);
                            setDef2(100);
                            break;
                        }
                }; 
                if (defense1 <= 0 && defense2 > 0){
                    setGameText((`${fighter2.name} wins the fight over ${fighter1.name}!`))
                    
                    let response2 = prompt(`${fighter2.name} won! Play again?`, "yes")
                if(response2==="yes"){
                            setDef1(100);
                            setDef2(100);
                            break;
                        } else{
                            setDef1(100);
                            setDef2(100);
                            break;
                        }
                };
            //the bracket below closes the while loop   
            break;    
                };    
        };
    
        return (
          <div>
            
            <div className="health1">
                {nameFighter1} Health {Math.ceil(defense1)}
                </div>
                <div className="health2">
                {nameFighter2} Health {Math.ceil(defense2)}
                </div>
            
                <div className="fightDiv">    
                <Tippy content="Keep pressing FIGHT until there's a winner!"><button onClick={handleClick} className="fightButton">
                    Fight!
                </button>
                </Tippy>
                <span className="text">{gameText}</span>
                    </div>
                                 
          </div>            
        ); 
    };
