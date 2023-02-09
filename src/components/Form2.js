import {useState} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form2 (props) {
  //State to hold the data of our form
  const [formData2, setFormData2] = useState({
    searchterm2: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData2({ ...formData2, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.herosearch(formData2.searchterm2);
  };

  //The component must return some JSX
  return (
    <div className="inputDivContainer2">
      <div className="inputDivChild">
        <form onSubmit={handleSubmit}>
        <input
          id="input"
          placeholder="SuperHero 2"
          type="text"
          name="searchterm2"
          onChange={handleChange}
          value={formData2.searchterm2}
        />   
        <div className="buttonRight">
        <input type="submit" button id="button-29"/>
        </div>
      </form>
      </div>
    </div>
  );
};