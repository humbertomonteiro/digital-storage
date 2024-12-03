import ProductCard from "../ProductCard";

const ProductListing = ({ products }) => {
  return (
    <div>
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
