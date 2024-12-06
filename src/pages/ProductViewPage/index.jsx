import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";
import BuyBox from "../../components/BuyBox";
import useProducts from "../../data/hooks/useProducts";
import { useParams } from "react-router-dom";

const ProductViewPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const productShow = products.filter((product) => product.id === +id);
  return (
    <div>
      <div>
        {/*---------------- componente gallery aqui --------------*/}
        <img src={productShow[0]?.image} alt={productShow[0]?.title} />
        <BuyBox productShow={productShow[0]} />
      </div>
      <Section
        title="Produtos relacionados"
        link={{ href: "/products", text: "Ver todos ->" }}
      >
        <ProductListing limitedProducts={4} styleForColumns="true" />
      </Section>
    </div>
  );
};

export default ProductViewPage;
