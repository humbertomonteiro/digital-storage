import "./productCard.css";
const ProductCard = ({ product, topProducts }) => {
  return (
    <div className="container-product-card" data-top-products={topProducts}>
      <img loading="lazy" src={product.image} alt={product.id} />
      <div className="product-info">
        {/* <span>{product.category}</span> */}
        <p>{product.title}</p>
        <div className="product-price">
          {product.priceDiscount && (
            <strong className="price-discount">
              R$ {product.priceDiscount}
            </strong>
          )}
          <strong>R$ {product.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
