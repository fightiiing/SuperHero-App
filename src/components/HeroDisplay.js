export default function  HeroDisplay ({ hero }){

//the display returned if superman, thing, or batman was searched for based on the conditional below. Different location chosen within the returned json data object.
  const realSuperhero = () => {
    return (
      <div className="heroContainer">
        <div className="heroStats">
          <h1>{hero.results[1].name}</h1>
          <h3>Combat = {hero.results[1].powerstats.combat}</h3>
          <h3>IQ = {hero.results[1].powerstats.intelligence} <span className="divider">|</span> Strength = {hero.results[1].powerstats.strength} </h3>
          <h3>Speed = {hero.results[1].powerstats.speed} <span className="divider">|</span> Durability = {hero.results[1].powerstats.durability}</h3>
          <h3>Height = {hero.results[1].appearance.height[0]} <span className="divider">|</span> Weight = {hero.results[1].appearance.weight[0]}</h3>
          </div>     
          <img src={hero.results[1].image.url} alt={hero.results[1].name} />       
      </div>
    );  
};

//the display if thing was searched for
const thing = () => {
  return (
    <div className="heroContainer">
     <div className="heroStats">
      <h1>{hero.results[3].name}</h1>
      <h3>Combat = {hero.results[3].powerstats.combat}</h3>
      <h3>IQ = {hero.results[3].powerstats.intelligence} <span className="divider">|</span> Strength = {hero.results[3].powerstats.strength} </h3>
      <h3>Speed = {hero.results[3].powerstats.speed} <span className="divider">|</span> Durability = {hero.results[3].powerstats.durability}</h3>
      <h3>Height = {hero.results[3].appearance.height[0]} <span className="divider">|</span> Weight = {hero.results[3].appearance.weight[0]}</h3>
      </div>     
      <img src={hero.results[3].image.url} alt={hero.results[3].name} />       
  </div>
  );  
};


//the standard data picked to display for returned superhero data
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
  
//function to return loading JSX, if data isn't available
    const loading = () => {
      return <h1>No Superhero to Display</h1>;
    };

//conditional which chooses which function to run, which determines where the data is to be pulled from, depending on the superhero data. 'hero' is the json data passed in.   
  if (hero){
      if (hero.results[0].id==="195" && hero.results[1]){
        //superman  
        return realSuperhero();
      } else if (hero.results[0].id==="69"){
        //batman
        return realSuperhero();
      } else if (hero.results[0].id==="405" && hero.results[1]){
        //thor
        return realSuperhero();
      } else if (hero.results[0].id==="428" && hero.results[3]){
        //thing
        return thing();
      } else {
        return loaded();
      }   
  } else { 
        return loading();
      }
  };
