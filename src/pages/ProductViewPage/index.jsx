import "./productViewPage.css";
import ProductListing from "../../components/ProductListing";

import Section from "../../components/Section";
import BuyBox from "../../components/BuyBox";
import useProducts from "../../data/hooks/useProducts";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import { imagesGalleryNike } from "../../data/constants/imagesGalleryHome";

const ProductViewPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const productShow = products.filter((product) => product.id === +id);

  return (
    <div className="container-product-view-page container">
      <div className="product-view">
        <div className="product-view-gallery">
          <Gallery imgs={imagesGalleryNike} showThumbs={true} radios={"4px"} />
        </div>
        <div className="product-view-buy-box">
          <BuyBox productShow={productShow[0]} />
        </div>
      </div>
      <Section
        title="Produtos relacionados"
        link={{ href: "/products", text: "Ver todos ->" }}
      >
        <ProductListing
          limitedProducts={4}
          filter={productShow[0].category}
          styleForColumns="true"
        />
      </Section>
    </div>
  );
};

export default ProductViewPage;
