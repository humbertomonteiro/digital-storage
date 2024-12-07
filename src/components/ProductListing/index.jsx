import "./productlisting.css";
import ProductCard from "../ProductCard";
import useProducts from "../../data/hooks/useProducts";

const ProductListing = ({ limitedProducts, styleForColumns }) => {
  const { products } = useProducts();
  const productsShow = products.slice(0, limitedProducts);

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
