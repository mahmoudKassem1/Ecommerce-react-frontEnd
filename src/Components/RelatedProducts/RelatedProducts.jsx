import React from 'react'
import './RelatedProducts.css'
import dataproduct from '../Assets/data'
import Items from '../items/Items'

const RelatedProducts = () => {
  return (
    <div className='related-products'>
      <h1>Discover more products</h1>
      <hr />
      <div className="relatedproducts-items">
            {dataproduct.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price={item.old_price}  />
            })}
      </div>
    </div>
  )
}

export default RelatedProducts
