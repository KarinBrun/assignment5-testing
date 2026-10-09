import './CartItem.css';

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3>{props.name}</h3>
        <p className="cart-item-price">
          ${props.price.toFixed(2)}
        </p>
        <p>Quantity: {props.quantity}</p>
      </div>

      <button 
        className="remove-button"
        onClick={props.onRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;