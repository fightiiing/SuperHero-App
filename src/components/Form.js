import {useState} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",});

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to herosearch prop, which is apps getHero function
    if(formData.searchterm.toLowerCase()==="superman"){
      props.herosearch(644)
    } else if (formData.searchterm.toLowerCase()==="thor"){
      props.herosearch(659);
    } else if (formData.searchterm.toLowerCase()==="batman"){
      props.herosearch(70);
    } else if (formData.searchterm.toLowerCase()==="thing"){
      props.herosearch(658);
    } else{
    props.herosearch(formData.searchterm);
    }
  };

  return (
    <div className="inputDivContainer">  
        <form onSubmit={handleSubmit}>
          <Tippy content="Type in a Superhero name">
            <input
              id="input"
              placeholder="Superhero 1"
              type="text"
              name="searchterm"
              onChange={handleChange}
              value={formData.searchterm}
              autoFocus
            />   
          </Tippy>
          <input type="Submit" button id="submit"/>
      </form>    
    </div>
  );
};