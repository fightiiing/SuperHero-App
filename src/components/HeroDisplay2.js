export default function  HeroDisplay2 ({ hero2 }){

    const realSuperhero = () => {
      return (
        <div className="heroContainer">
          <div className="heroStats">
            <h1>{hero2.results[1].name}</h1>
            <h3>Combat = {hero2.results[1].powerstats.combat}</h3>
            <h3>IQ = {hero2.results[1].powerstats.intelligence} <span className="divider">|</span> Strength = {hero2.results[1].powerstats.strength} </h3>
            <h3>Speed = {hero2.results[1].powerstats.speed} <span className="divider">|</span> Durability = {hero2.results[1].powerstats.durability}</h3>
            <h3>Height = {hero2.results[1].appearance.height[0]} <span className="divider">|</span> Weight = {hero2.results[1].appearance.weight[0]}</h3>
            </div>     
            <img src={hero2.results[1].image.url} alt={hero2.results[1].name} />     
        </div>
      );  
};

const thing = () => {
  return (
    <div className="heroContainer">
      <div className="heroStats">
        <h1>{hero2.results[3].name}</h1>
        <h3>Combat = {hero2.results[3].powerstats.combat}</h3>
        <h3>IQ = {hero2.results[3].powerstats.intelligence} <span className="divider">|</span> Strength = {hero2.results[3].powerstats.strength} </h3>
        <h3>Speed = {hero2.results[3].powerstats.speed} <span className="divider">|</span> Durability = {hero2.results[3].powerstats.durability}</h3>
        <h3>Height = {hero2.results[3].appearance.height[0]} <span className="divider">|</span> Weight = {hero2.results[3].appearance.weight[0]}</h3>
        </div>     
        <img src={hero2.results[3].image.url} alt={hero2.results[3].name} />     
    </div>
  );  
};

    const loaded = () => {
      return (
        <div className="heroContainer">
          <div className="heroStats">
            <h1>{hero2.results[0].name}</h1>
            <h3>Combat = {hero2.results[0].powerstats.combat}</h3>
            <h3>IQ = {hero2.results[0].powerstats.intelligence} <span className="divider">|</span> Strength = {hero2.results[0].powerstats.strength} </h3>
            <h3>Speed = {hero2.results[0].powerstats.speed} <span className="divider">|</span> Durability = {hero2.results[0].powerstats.durability}</h3>
            <h3>Height = {hero2.results[0].appearance.height[0]} <span className="divider">|</span> Weight = {hero2.results[0].appearance.weight[0]}</h3>
            </div>     
            <img src={hero2.results[0].image.url} alt={hero2.results[0].name} />      
        </div>
      );  
};

    const loading = () => {
      return <h1>No Superhero to Display</h1>;
    };
  
  if (hero2){
    if (hero2.results[0].id==="195" && hero2.results[1]){
      //superman  
      return realSuperhero();
    } else if (hero2.results[0].id==="69"){
      //batman
      return realSuperhero();
    } else if (hero2.results[0].id==="405" && hero2.results[1]){
      //thor
      return realSuperhero();
    } else if (hero2.results[0].id==="428" && hero2.results[3]){
      //thing
      return thing();
    } else {
      return loaded();
    }   
    } else { 
      return loading();
    }
};