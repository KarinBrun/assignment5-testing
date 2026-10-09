import CartItem from '../components/CartItem';

function CartPage({ products, removeFromCart }) {
  const cartTotal = products.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="main-content">
      <div className="cart-section">
        <h2>Shopping Cart</h2>

        {products.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {products.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}

            <h3 className="cart-total">
              Total: ${cartTotal.toFixed(2)}
            </h3>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;