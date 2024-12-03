import { useEffect, useState, useMemo } from "react";

import ProductListing from "../../components/ProductListing";
import Section from "../../components/Section";

import { dataProducts } from "../../data/dataProducts";

import { useParams } from "react-router-dom";

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
  const [allProducts, setAllProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("cheaper");

  const { search } = useParams();

  //buscando produtos de uma api(fake store)
  async function fetchData() {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response status: " + response.status);
      }

      const products = await response.json();

      setAllProducts(products);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  // filtra de acordo com o parâmetro passado(parâmetro passado no search do header),
  // busca por nome ou categoria.
  const products = useMemo(() => {
    const allProductsAndDataProducts = [...allProducts, ...dataProducts];
    if (search === "all") {
      return allProductsAndDataProducts;
    }
    return allProductsAndDataProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(search.toLowerCase()) ||
        product.category?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allProducts]);

  return (
    <div>
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
