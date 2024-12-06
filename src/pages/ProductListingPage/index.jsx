import { useState } from "react";

import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";

import useProducts from "../../data/hooks/useProducts";

//componente que ordena por mais caro ou mais barato
const OrderBy = ({ setState }) => {
  return (
    <div>
      <h3>Ordernar por</h3>
      <select onChange={(e) => setState(e.target.value)}>
        <option value="cheaper">Mais barato</option>
        <option value="more-expensive">Mais caro</option>
      </select>
    </div>
  );
};

const ProductListingPage = () => {
  const [orderBy, setOrderBy] = useState("cheaper");

  const { products, search } = useProducts();

  return (
    <div className="container">
      <div>
        <span>
          Resultado para {search}: {products.length}
        </span>
        <OrderBy setState={setOrderBy} />
        <div>
          <h3>Filtrar por</h3>
          {/* ---------------adicionar component FilterGroup----------------- */}
        </div>
      </div>
      <Section>
        <ProductListing
          products={
            orderBy === "cheaper"
              ? products.sort((a, b) => a.price - b.price)
              : products.sort((a, b) => b.price - a.price)
          }
        />
      </Section>
    </div>
  );
};

export default ProductListingPage;
