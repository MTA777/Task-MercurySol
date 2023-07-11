//

import React from "react";
import ProductList from "./components/ProductList.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  return (
    <div>
      <SearchBar />
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;
