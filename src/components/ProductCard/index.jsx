const ProductCard = ({ product }) => {
  return (
    <div>
      <img loading="lazy" src={product.image} alt={product.id} />
      <div className="product-info">
        {/* <span>{product.category}</span> */}
        <p>{product.title}</p>
        <div>
          <strong>R$ {product.priceDiscount}</strong>
          <strong>R$ {product.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
