import "./homePage.css";
import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";
// import GalleryHome from "../../components/GalleryHome";
import Gallery from "../../components/Gallery";

import collection1 from "../../assets/imgs/collection-1.png";
import collection2 from "../../assets/imgs/collection-2.png";
import collection3 from "../../assets/imgs/collection-3.png";

import imgSale from "../../assets/imgs/tenis--verde.png";
import { imagesGalleryHome } from "../../data/constants/imagesGalleryHome";
import { Link } from "react-router-dom";

import { PiPantsLight, PiBaseballCap } from "react-icons/pi";
import { RiHeadphoneLine } from "react-icons/ri";
import { TbShoe } from "react-icons/tb";
import { IoShirtOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <div>
      <Gallery imgs={imagesGalleryHome} showThumbs={false}>
        <span>Melhores ofertas personalizadas</span>
        <h1>Queima de stoque Nike🔥</h1>
        <p>
          Quos reiciendis voluptate similique facere. Repellat accusamus quos
          dolor cum officia consequuntur.
        </p>
        <Link to={"/products"}>Ver Ofertas</Link>
      </Gallery>

      <div className="container">
        <Section title={"Coleções em destaque"}>
          <div className="top-collection-imgs">
            <div>
              {" "}
              <span>30% OFF</span>
              <img src={collection1} alt="Imagem coleção em destaque 1" />
              <button>Comprar</button>
            </div>
            <div>
              <span>30% OFF</span>
              <img src={collection2} alt="Imagem coleção em destaque 2" />
              <button>Comprar</button>
            </div>
            <div>
              <span>30% OFF</span>
              <img src={collection3} alt="Imagem coleção em destaque 3" />
              <button>Comprar</button>
            </div>
          </div>
        </Section>

        <Section title="Coleções em destaque" titleAlign="center">
          <div className="container-icons">
            <div>
              <IoShirtOutline />
              <span>Camisetas</span>
            </div>
            <div>
              <PiPantsLight />
              <span>Calças</span>
            </div>
            <div>
              <PiBaseballCap />
              <span>Bonés</span>
            </div>
            <div>
              <RiHeadphoneLine />
              <span>Headphones</span>
            </div>
            <div>
              <TbShoe />
              <span>Tênis</span>
            </div>
          </div>
        </Section>

        <Section
          title={"Produtos em alta"}
          link={{ text: "Ver todos ->", href: "/products" }}
        >
          <ProductListing limitedProducts={8} styleForColumns="true" />
        </Section>
      </div>
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
    </div>
  );
};

export default HomePage;
