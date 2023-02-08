// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list

export default function  HeroDisplay ({ hero }){
    //function to return loaded JSX
    
    const loaded = () => {
      return (
        <div>
        <hr />
        <div className="versus">
        <h1>{hero.results[0].name}</h1>
        <span id ="vs">VS.</span>
        <h1>Superhero 2</h1>
        </div>
                    
          <h3>Intelligence = {hero.results[0].powerstats.intelligence} <span className="divider">|</span> Strength = {hero.results[0].powerstats.strength} <span className="divider">|</span> Speed = {hero.results[0].powerstats.speed} <span className="divider">|</span> Durability = {hero.results[0].powerstats.durability}</h3>
          <h3>Height = {hero.results[0].appearance.height[0]} <span className="divider">|</span> Weight = {hero.results[0].appearance.weight[0]}<span className="divider"> | </span> Combat = {hero.results[0].powerstats.combat}</h3>
                    
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
  
  // We must export the component to use it in other files
  