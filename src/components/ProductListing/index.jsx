import "./productlisting.css";
import ProductCard from "../ProductCard";
import useProducts from "../../data/hooks/useProducts";
import { useEffect } from "react";

const ProductListing = ({ limitedProducts, styleForColumns }) => {
  const { products } = useProducts();
  const productsShow = products.slice(0, limitedProducts);

  useEffect(() => console.log(products));

  return (
    <div className="container-product-listing">
      {productsShow.length < 1 ? (
        <div>Infelizmente não temos o que está procurando.</div>
      ) : (
        productsShow?.map((product) => {
          return (
            <ProductCard
              product={product}
              styleForColumns={styleForColumns}
              key={product.id}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductListing;
