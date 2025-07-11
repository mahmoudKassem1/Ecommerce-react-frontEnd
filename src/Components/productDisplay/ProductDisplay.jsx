import React, { useContext } from 'react';
import './ProductDisplay.css';
import star from '../Assets/star_icon.png';
import stardull from '../Assets/star_dull_icon.png';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { ShopContex } from '../../contex/ShopContex';


const ProductDisplay = ({ product }) => {
    const {add_cart} = useContext(ShopContex);
  return (
    <div className='productDisplay'>
      <div className="product-display-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>

        <div className="product-display-star">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={stardull} alt="star dull" />
          <p>(812 reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="product-display-description">
          Discover the perfect style for your wardrobe. This product offers excellent comfort,
          elegant design, and high-quality fabric – ideal for daily wear or special occasions.
        </div>

        <div className="product-display-size">
          <h3>Select Size</h3>
          <div className="product-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

       <button className="add-to-cart-btn" onClick={() => add_cart(product.id)}>
  Add to Cart
</button>


        <p className="product-category">
          <strong>Category:</strong> {product.category}
        </p>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDisplay;
