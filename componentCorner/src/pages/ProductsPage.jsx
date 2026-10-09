import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <div className="main-content">
      <br />
      <h2>Featured Products</h2>
      <br />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            size={200}
            name={product.name}
            description={product.description}
            price={product.price}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;