import "./topCollection.css";
import Section from "../Section";
import collection1 from "../../assets/imgs/collection-1.png";
import collection2 from "../../assets/imgs/collection-2.png";
import collection3 from "../../assets/imgs/collection-3.png";

const TopCollection = () => {
  return (
    <Section className="container-top-collection container">
      <h2>Coleções em destaque</h2>
      <div className="top-collection-imgs">
        <img src={collection1} alt="Imagem coleção em destaque 1" />
        <img src={collection2} alt="Imagem coleção em destaque 2" />
        <img src={collection3} alt="Imagem coleção em destaque 3" />
      </div>
    </Section>
  );
};

export default TopCollection;
