import { useState } from "react";
import data from "./dummy.json";

const App = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    let x = data.filter(
      (product) => product.productName.toLowerCase() === message.toLowerCase()
    );

    console.log("new" + x);
    console.log("You search for:", event.target.value);
  };

  return (
    <div>
      <h1>Searchbar</h1>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h4>You search for: {message}</h4>
    </div>
  );
};

export default App;
