import React from "react";
import { useState, useEffect } from "react";

export default function Fight({ hero, hero2, setProgressBar, setProgressBar2 }) {
    
let [gameText, setGameText] = useState("");
let [defense1, setDef1] = useState(100);
let [defense2, setDef2] = useState(100);
const [nameFighter1, setNameFighter1] = useState("");
const [nameFighter2, setNameFighter2] = useState("");

const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//create two fighter objects with their fighting stats, then calculate simple game criteria
let fighter1 = {};
let fighter2 = {};
useEffect(() => {
    setProgressBar(defense1)
}, [defense1])

useEffect(()=> {
    setProgressBar2(defense2)    
},[defense2])

function handleClick() {

        fighter1 = { 
                name: hero.name ? hero.name : hero.results[0].name,
                durability: hero.powerstats ? Number(hero.powerstats.durability) : Number(hero.results[0].powerstats.durability),
                combat: hero.powerstats ? Number(hero.powerstats.combat) : Number(hero.results[0].powerstats.combat),
                intelligence: hero.powerstats ? Number(hero.powerstats.intelligence) : Number(hero.results[0].powerstats.intelligence),
                strength: hero.powerstats ? Number(hero.powerstats.strength) : Number(hero.results[0].powerstats.strength),
                speed: hero.powerstats ? Number(hero.powerstats.speed) : Number(hero.results[0].powerstats.speed),
                power: hero.powerstats ? Number(hero.powerstats.power) : Number(hero.results[0].powerstats.power),
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

        fighter2 = { 
            name: hero2.name ? hero2.name : hero2.results[0].name,
            durability: hero2.powerstats ? Number(hero2.powerstats.durability) : Number(hero2.results[0].powerstats.durability),
            combat: hero2.powerstats ? Number(hero2.powerstats.combat) : Number(hero2.results[0].powerstats.combat),
            intelligence: hero2.powerstats ? Number(hero2.powerstats.intelligence) : Number(hero2.results[0].powerstats.intelligence),
            strength: hero2.powerstats ? Number(hero2.powerstats.strength) : Number(hero2.results[0].powerstats.strength),
            speed: hero2.powerstats ? Number(hero2.powerstats.speed) : Number(hero2.results[0].powerstats.speed),
            power: hero2.powerstats ? Number(hero2.powerstats.power) : Number(hero2.results[0].powerstats.power),
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

        if (isNaN(fighter1.combat)){
            fighter1.durability=20;
            fighter1.combat=20;
            fighter1.intelligence=20;
            fighter1.strength=20;
            fighter1.speed=20;
            fighter1.power=20;
        }
           
        if (isNaN(fighter2.combat)){
            fighter2.durability=20;
            fighter2.combat=20;
            fighter2.intelligence=20;
            fighter2.strength=20;
            fighter2.speed=20;
            fighter2.power=20;
        }  
            fighter1.attack = ((fighter1.strength + fighter1.speed + fighter1.power) /(4+(fighter2.durability+fighter2.intelligence)/100));
            fighter1.accuracy = ((fighter1.combat + fighter1.intelligence) / 2);
        
            fighter2.attack = ((fighter2.strength + fighter2.speed + fighter2.power) /(4+(fighter1.durability+fighter1.intelligence)/100));            
            fighter2.accuracy = ((fighter2.combat + fighter2.intelligence) / 2);
            
            setNameFighter1(fighter1.name);
            setNameFighter2(fighter2.name);
        
        while (defense1 > 0 && defense2 > 0) {
            if (randomNum(0,100)>50){
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
                } else{
                    setDef1(100);
                    setDef2(100);
                }
            }; 
            if (defense1 <= 0 && defense2 > 0){
                setGameText((`${fighter2.name} wins the fight over ${fighter1.name}!`))
                   let response2 = prompt(`${fighter2.name} won! Play again?`, "yes")
                if(response2==="yes"){
                    setDef1(100);
                    setDef2(100);
                } else{
                    setDef1(100);
                    setDef2(100);
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
                <button onClick={handleClick} className="fightButton">
                    Fight!
                </button>
            <span className="text">{gameText}</span>
            </div>   
                          
        </div>            
        ); 
    };