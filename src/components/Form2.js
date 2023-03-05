import {useState} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Form2 (props) {
  //State to hold the data of our form
  const [formData2, setFormData2] = useState({
    searchterm2: "",});

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData2({ ...formData2, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    if(formData2.searchterm2.toLowerCase()==="superman"){
      props.herosearch(644)
    } else if (formData2.searchterm2.toLowerCase()==="thor"){
      props.herosearch(659);
    } else if (formData2.searchterm2.toLowerCase()==="batman"){
      props.herosearch(70);
    } else if (formData2.searchterm2.toLowerCase()==="thing"){
      props.herosearch(658);
    } else{
    props.herosearch(formData2.searchterm2);
    }
  };

  return (
    <div className="inputDivContainer2">
      <form onSubmit={handleSubmit}>
        <Tippy content="Type in a Superhero name">
          <input
            id="input"
            placeholder="Superhero 2"
            type="text"
            name="searchterm2"
            onChange={handleChange}
            value={formData2.searchterm2}
            />
        </Tippy>   
        <input type="submit" button id="submit"/>
      </form>
    </div>
  );
};