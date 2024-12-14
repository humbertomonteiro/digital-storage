import "./buybox.css";
import { useEffect } from "react";
import ProductOptions from "../ProductOptions";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BuyBox = ({ productShow }) => {
  const optionsLength = [39, 40, 41, 42, 43];
  const optionsColors = ["#6feeff", "#c92071", "#5e5e5e", "#6d70b7"];
  const navigate = useNavigate();

  useEffect(() => {
    if (productShow) {
      return;
    } else {
      navigate("/");
    }
  });

  return (
    <div className="container-buybox">
      <h1>{productShow?.title}</h1>
      <span>{productShow?.category}</span>

      <div className="container-rating">
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="rating">
          <div>
            {" "}
            5.0 <FaStar />{" "}
          </div>
          <p>(90 Avaliações)</p>
        </div>
      </div>

      <strong>
        {" "}
        <span>R$ </span> {productShow?.price}
      </strong>
      <h2>Descrição</h2>
      <p>{productShow?.description ?? "Produto sem descrição"}</p>
      <ProductOptions
        options={optionsLength}
        shape="square"
        text="Tamanho"
        type="text"
      />
      <ProductOptions
        options={optionsColors}
        shape="circle"
        text="Cores"
        type="color"
      />

      <button>COMPRAR</button>
    </div>
  );
};

export default BuyBox;
