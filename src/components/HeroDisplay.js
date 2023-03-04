export default function  HeroDisplay ({ hero }){

//how data searched via character id is displayed 
const numeric = () => {
  return (
    <div className="heroContainer">
     <div className="heroStats">
      <h1>{hero.name}</h1>
      <h3>Combat = {hero.powerstats.combat}</h3>
      <h3>IQ = {hero.powerstats.intelligence} <span className="divider">|</span> Strength = {hero.powerstats.strength} </h3>
      <h3>Speed = {hero.powerstats.speed} <span className="divider">|</span> Durability = {hero.powerstats.durability}</h3>
      <h3>Height = {hero.appearance.height[0]} <span className="divider">|</span> Weight = {hero.appearance.weight[0]}</h3>
      </div>     
      <img src={hero.image.url} alt={hero.name} />       
  </div>
  );  
};

//how data searched via text is displayed 
  const loaded = () => {
      return (
        <div className="heroContainer">
          <div className="heroStats">
            <h1>{hero.results[0].name}</h1>
            <h3>Combat = {hero.results[0].powerstats.combat}</h3>
            <h3>IQ = {hero.results[0].powerstats.intelligence} <span className="divider">|</span> Strength = {hero.results[0].powerstats.strength} </h3>
            <h3>Speed = {hero.results[0].powerstats.speed} <span className="divider">|</span> Durability = {hero.results[0].powerstats.durability}</h3>
            <h3>Height = {hero.results[0].appearance.height[0]} <span className="divider">|</span> Weight = {hero.results[0].appearance.weight[0]}</h3>
            </div> 
            <img src={hero.results[0].image.url} alt={hero.results[0].name} />   
        </div>            
      );
    };
  
    const loading = () => {
      return <h1>No Superhero to Display</h1>;
    };

//conditional which chooses which function to run depending on the superhero data.
  if (hero){
      if (hero.id){
        return numeric();      
      } else {
        return loaded();
      }   
  } else { 
        return loading();
      }
  };