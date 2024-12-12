import { useState } from "react";
import "./productListingPage.css";

import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";

import useProducts from "../../data/hooks/useProducts";
import FilterGroup from "../../components/FilterGroup";

import { IoClose } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

//componente que ordena por mais caro ou mais barato
const OrderBy = ({ setState }) => {
  return (
    <label className="container-order-by">
      <h3>Ordernar por:</h3>
      <select onChange={(e) => setState(e.target.value)}>
        <option value="cheaper">Mais barato</option>
        <option value="more-expensive">Mais caro</option>
      </select>
    </label>
  );
};

const FilterGroupContent = ({ setState }) => {
  return (
    <div className="product-listing-page-filter-group">
      <div className="product-listing-page-filter-group-title">
        <h2>Filtrar por</h2>
        <button onClick={() => setState(false)}>
          <IoClose />
        </button>
      </div>
      <FilterGroup
        title={"Marca"}
        options={[
          { text: "Adiddas", value: "adiddas" },
          { text: "Balenciaga", value: "balenciaga" },
          { text: "Nike", value: "nike" },
          { text: "Puma", value: "puma" },
        ]}
        inputType={"checkbox"}
      />
      <FilterGroup
        title={"Categorias"}
        options={[
          { text: "Esporte e lazer" },
          { text: "Casual" },
          { text: "Ultilitário" },
          { text: "Corrida" },
        ]}
        inputType={"checkbox"}
      />
      <FilterGroup
        title={"Gênero"}
        options={[
          { text: "Masculino", value: "men" },
          { text: "Feminino", value: "women" },
          { text: "Unisex", value: "unisex" },
        ]}
        inputType={"checkbox"}
      />
      <FilterGroup
        title={"Estado"}
        options={[
          { text: "Novo", value: "new" },
          { text: "Usado", value: "old" },
        ]}
        inputType={"checkbox"}
      />
    </div>
  );
};

const ProductListingPage = () => {
  const [orderBy, setOrderBy] = useState("cheaper");
  const [showFilterGroup, setShowFilterGroup] = useState(false);

  const { products, search } = useProducts();

  return (
    <div className="container">
      <div className="order-products">
        <span>
          <strong>
            Resultado para "{search ? search : "Todos os produtos"}":{" "}
          </strong>
          {products.length} produtos
        </span>
        <div className="order-products-with-button-filter">
          <OrderBy setState={setOrderBy} />
          <button onClick={() => setShowFilterGroup(!showFilterGroup)}>
            <CiFilter />
          </button>
        </div>
      </div>

      <div className="product-listing-page-content">
        <div className="product-listing-page-filter-group-desktop">
          <FilterGroupContent />
        </div>

        {showFilterGroup && (
          <div className="product-listing-page-filter-group-mobile">
            <FilterGroupContent setState={setShowFilterGroup} />
          </div>
        )}

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
    </div>
  );
};

export default ProductListingPage;
