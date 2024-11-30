import { useEffect, useState } from "react";

import ProductListing from "../../components/ProductListing";
import { dataProducts } from "../../data/dataProducts";

import { useParams } from "react-router-dom";

const ProductListingPage = (props) => {
  const [listProduct, setListProduct] = useState([]);

  const { search } = useParams();

  async function getData() {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response status: " + response.status);
      }

      const products = await response.json();

      const allProducts = [...products, ...dataProducts];
      let filterProducts = allProducts;

      if (search !== "all") {
        filterProducts = allProducts.filter(
          (product) =>
            product.name?.toLowerCase().includes(search) ||
            product.category?.toLowerCase().includes(search)
        );
      }

      setListProduct(filterProducts);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <div>
        <span>
          Resultado para {search}: {listProduct.length}
        </span>
      </div>
      <ProductListing products={listProduct} />
    </div>
  );
};

export default ProductListingPage;
