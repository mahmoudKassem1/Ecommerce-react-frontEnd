import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContex } from '../contex/ShopContex';
import dropicon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/items/Items';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContex);
  const [visibleCount, setVisibleCount] = useState(6); 

  const filteredProducts = Array.isArray(all_products)
    ? all_products.filter(
        (item) =>
          item.category.toLowerCase() === props.category.toLowerCase()
      )
    : [];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="ShopCategory">
      <img className="ShopCategory-banner" src={props.banner} alt="Category Banner" />

      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 - {Math.min(visibleCount, filteredProducts.length)}</span> out of {filteredProducts.length} products.
        </p>
        <div className="ShopCategory-sort">
          <span>Sort by</span>
          <img src={dropicon} alt="Sort dropdown" />
        </div>
      </div>

      <div className="ShopCategory-products">
        {filteredProducts.slice(0, visibleCount).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="ShopCategory-loadmore">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
