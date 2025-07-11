import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContex } from '../contex/ShopContex';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';

const Product = () => {
  const { all_products } = useContext(ShopContex);
  const { productId } = useParams();

  if (!all_products) return <div>Loading products...</div>;

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product = {product  }/>
    </div>
  );
};

export default Product;
