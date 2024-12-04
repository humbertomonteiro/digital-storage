import { createContext, useState, useEffect, useMemo } from "react";
import { dataProducts } from "../constants/dataProducts";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response status: " + response.status);
      }

      const products = await response.json();
      setAllProducts(products);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const products = useMemo(() => {
    const allProductsAndDataProducts = [...allProducts, ...dataProducts];
    if (search === "all") {
      return allProductsAndDataProducts;
    }
    return allProductsAndDataProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(search.toLowerCase()) ||
        product.category?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allProducts]);

  return (
    <ProductsContext.Provider value={{ products, search, setSearch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
