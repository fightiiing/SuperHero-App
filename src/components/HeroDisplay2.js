export default function  HeroDisplay2 ({ hero2 }){
    //function to return loaded JSX
    
    const loaded = () => {
      return (
        <div className="heroContainer">
          <div className="heroStats">
            <h1>{hero2.results[0].name}</h1>
        
            <h3>Intelligence = {hero2.results[0].powerstats.intelligence} <span className="divider">|</span> Strength = {hero2.results[0].powerstats.strength} </h3>
            <h3>Speed = {hero2.results[0].powerstats.speed} <span className="divider">|</span> Durability = {hero2.results[0].powerstats.durability}</h3>
            <h3>Height = {hero2.results[0].appearance.height[0]} <span className="divider">|</span> Weight = {hero2.results[0].appearance.weight[0]}</h3>
                    
            <img src={hero2.results[0].image.url} alt={hero2.results[0].name} />   
          </div>  
        </div>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Superhero to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return hero2 ? loaded() : loading();
  };