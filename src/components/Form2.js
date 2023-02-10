import {useState} from "react";

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
    props.herosearch(formData2.searchterm2);
  };

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
        <input type="submit" button id="button-29"/>
        
      </form>
      </div>
    </div>
  );
};