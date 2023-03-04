export default function  HeroDisplay2 ({ hero2 }){

const numeric = () => {
  return (
    <div className="heroContainer">
     <div className="heroStats">
      <h1>{hero2.name}</h1>
      <h3>Combat = {hero2.powerstats.combat}</h3>
      <h3>IQ = {hero2.powerstats.intelligence} <span className="divider">|</span> Strength = {hero2.powerstats.strength} </h3>
      <h3>Speed = {hero2.powerstats.speed} <span className="divider">|</span> Durability = {hero2.powerstats.durability}</h3>
      <h3>Height = {hero2.appearance.height[0]} <span className="divider">|</span> Weight = {hero2.appearance.weight[0]}</h3>
      </div>     
      <img src={hero2.image.url} alt={hero2.name} />       
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
    if (hero2.id){
      return numeric();      
    }else {
      return loaded();
    }   
   } else { 
    return loading();
  }
};