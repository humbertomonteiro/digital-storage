import "./homePage.css";
import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";

import collection1 from "../../assets/imgs/collection-1.png";
import collection2 from "../../assets/imgs/collection-2.png";
import collection3 from "../../assets/imgs/collection-3.png";

import imgSale from "../../assets/imgs/product-thumb-1.jpeg";

const HomePage = () => {
  return (
    <div>
      <Section title={"Coleções em destaque"}>
        <div className="top-collection-imgs">
          <img src={collection1} alt="Imagem coleção em destaque 1" />
          <img src={collection2} alt="Imagem coleção em destaque 2" />
          <img src={collection3} alt="Imagem coleção em destaque 3" />
        </div>
      </Section>

      <Section
        title={"Produtos em alta"}
        link={{ text: "Ver todos ->", href: "/products" }}
      >
        <ProductListing limitedProducts={8} styleForColumns="true" />
      </Section>

      <Section>
        <div className="container-sale">
          <div className="sale-img">
            <img src={imgSale} alt="Tênis em oferta" />
          </div>
          <div className="sale-content">
            <span>Oferta especial</span>
            <h2>Air Jordan edição de colecionador</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              modi adipisci distinctio! Ad, consectetur temporibus beatae
              accusantium cum quod ducimus illum sequi quo consequatur possimus
              perspiciatis optio qui, minus reprehenderit.
            </p>
            <button>Ver oferta</button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
