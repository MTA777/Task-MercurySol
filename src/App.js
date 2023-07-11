import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import products from "./components/dummy.json";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={filteredProducts.length > 0 ? filteredProducts : products}
      />
    </div>
  );
};

export default App;
