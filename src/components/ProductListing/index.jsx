const ProductListing = ({ products }) => {
  return (
    <section>
      {products.length < 1 ? (
        <div>Infelizmente não temos o que está procurando.</div>
      ) : (
        products?.map((product) => {
          return (
            <div>
              <strong>{product.category}</strong>
              <img loading="lazy" src={product.image} alt={product.id} />
            </div>
          );
        })
      )}
    </section>
  );
};

export default ProductListing;
