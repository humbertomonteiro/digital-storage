import ProductCard from "../ProductCard";
import "./productlisting.css"
const ProductListing = ({ products }) => {
  return (
    <div className="container-product-listing" >
      {products.length < 1 ? (
        <div>Infelizmente não temos o que está procurando.</div>
      ) : (
        products?.map((product) => {
          return <ProductCard product={product} />;
        })
      )}
    </div>
  );
};

export default ProductListing;
