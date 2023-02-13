export default function  HeroDisplay ({ hero }){
        
    const loaded = () => {
      return (
        <div className="heroContainer">
          <div className="heroStats">
            <h1>{hero.results[0].name}</h1>
            <h3>Fighting Ability = {hero.results[0].powerstats.combat}</h3>
            <h3>Intelligence = {hero.results[0].powerstats.intelligence} <span className="divider">|</span> Strength = {hero.results[0].powerstats.strength} </h3>
            <h3>Speed = {hero.results[0].powerstats.speed} <span className="divider">|</span> Durability = {hero.results[0].powerstats.durability}</h3>
            <h3>Height = {hero.results[0].appearance.height[0]} <span className="divider">|</span> Weight = {hero.results[0].appearance.weight[0]}</h3>
            </div> 
            <img src={hero.results[0].image.url} alt={hero.results[0].name} />   
            
          
        </div>            
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Superhero to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return hero ? loaded() : loading();
  };