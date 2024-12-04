import "./productlisting.css";
import ProductCard from "../ProductCard";

const ProductListing = ({ products, topProducts }) => {
  return (
    <div className="container-product-listing">
      {products.length < 1 ? (
        <div>Infelizmente não temos o que está procurando.</div>
      ) : (
        products?.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              topProducts={topProducts}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductListing;
