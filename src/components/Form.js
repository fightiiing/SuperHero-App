import {useState} from "react";

export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to herosearch prop, which is apps getHero function
    props.herosearch(formData.searchterm);
  };

  return (
    <div className="inputDivContainer">
      <div className="inputDivAndButton">
        <form onSubmit={handleSubmit}>
        <input
          id="input"
          placeholder="Type in a SuperHero"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          autoFocus
        />   
        <input type="Submit" button id="button-29"/>
      </form>
      </div>
    </div>
  );
};