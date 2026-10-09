import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img 
        src={props.image}
        alt={props.name}
        className="product-image"
      />

      <h3 className="product-name">{props.name}</h3>

      <p className="description">
        {props.description}
      </p>

      <p className="price">
        ${props.price.toFixed(2)}
      </p>

      <button onClick={() => props.onAddToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;