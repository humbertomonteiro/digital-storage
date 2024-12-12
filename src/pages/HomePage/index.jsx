import "./homePage.css";
import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";
import useProducts from "../../data/hooks/useProducts";

import collection1 from "../../assets/imgs/collection-1.png";
import collection2 from "../../assets/imgs/collection-2.png";
import collection3 from "../../assets/imgs/collection-3.png";

const HomePage = () => {
  const { products } = useProducts();
  const itensShow = 8;
  const limitedProducts = products.slice(0, itensShow);

  return (
    <div>
      <Section title={"Coleções em destaque"}>
        <div className="container-top-collection-imgs">
          <img className="destaque-imagem" src={collection1} alt="Imagem coleção em destaque 1" />
          <img className="destaque-imagem" src={collection2} alt="Imagem coleção em destaque 2" />
          <img className="destaque-imagem" src={collection3} alt="Imagem coleção em destaque 3" />
        </div>
      </Section>
      <Section
        title={"Produtos em alta"}
        link={{ text: "Ver todos ->", href: "/products/all" }}
      >
        <ProductListing products={limitedProducts} topProducts={"true"} />
      </Section>
    </div>
  );
};

export default HomePage;
