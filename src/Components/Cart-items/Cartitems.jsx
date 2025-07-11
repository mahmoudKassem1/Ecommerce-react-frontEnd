import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContex } from '../../contex/ShopContex';
import cross from '../Assets/cart_cross_icon.png';

const Cartitems = () => {
  const { all_products, cart_item, remove_cart } = useContext(ShopContex);

  const cartItemsToShow = all_products.filter((e) => cart_item[e.id] > 0);

  const totalPrice = cartItemsToShow.reduce(
    (acc, item) => acc + item.new_price * cart_item[item.id],
    0
  );

  return (
    <div className='cart-container'>
      <h2>Your Shopping Cart</h2>

      {cartItemsToShow.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className='cart-header'>
            <div>Product</div>
            <div>Title</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
          </div>

          {cartItemsToShow.map((e) => (
            <div className="cart-item" key={e.id}>
              <img className="product-img" src={e.image} alt={e.name} />
              <span className="product-title">{e.name}</span>
              <span className="product-price">${e.new_price}</span>
              <span className="product-quantity">{cart_item[e.id]}</span>
              <span className="product-total">${e.new_price * cart_item[e.id]}</span>
              <img
                className="remove-icon"
                src={cross}
                onClick={() => remove_cart(e.id)}
                alt="Remove"
              />
            </div>
          ))}

          <div className="cart-total">
            <h3>Total Order: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartitems;
