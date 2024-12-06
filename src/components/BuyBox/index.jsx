import { useEffect } from "react";
import ProductOptions from "../ProductOptions";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BuyBox = ({ productShow }) => {
  const optionsLength = [39, 40, 41, 42, 43];
  const optionsColors = ["#000", "#fff", "#fefefe", "#252525"];
  const navigate = useNavigate();

  useEffect(() => {
    if (productShow) {
      return;
    } else {
      navigate("/");
    }
  });

  return (
    <div>
      <h1>{productShow?.title}</h1>
      <span>{productShow?.category}</span>

      <div>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div>
          5.0 <FaStar /> (90 Avaliações)
        </div>
      </div>

      <strong>R$ {productShow?.price}</strong>
      <h2>Descrição</h2>
      <p>{productShow?.description}</p>
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
    </div>
  );
};

export default BuyBox;
