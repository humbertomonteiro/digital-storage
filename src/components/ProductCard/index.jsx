import "./productCard.css"
const ProductCard = ({ product }) => {
  return (
    <div className="container-product-card" >
      <img loading="lazy" src={product.image} alt={product.id} />
      <div className="product-info">
        {/* <span>{product.category}</span> */}
        <p>{product.title}</p>
        <div className="product-price" >
          <strong className="price-discount" >R$ {product.priceDiscount}</strong>
          <strong>R$ {product.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
