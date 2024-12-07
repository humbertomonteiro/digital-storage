import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const formatPrice = (value, locales) => {
    return new Intl.NumberFormat(locales, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Link to={`/product-view/${product.id}`} className="container-product-card">
      <div className="product-card-img">
        <img loading="lazy" src={product.image} alt={product.id} />
      </div>
      <div className="product-info">
        {/* <span>{product.category}</span> */}
        <p>{product.title}</p>
        <div className="/product-price">
          {product.priceDiscount && (
            <strong className="price-discount">
              R$ {formatPrice(product.priceDiscount, "pt-BR")}
            </strong>
          )}
          <strong>R$ {formatPrice(product.price, "pt-BR")}</strong>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
