import React from 'react';
import { Link } from 'react-router-dom';
import productCSS from './Product.module.css';

import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../redux/shopping/shopping-actions';

function Product({ productData, addToCart, loadCurrentItem }) {
  return (
    <div className={productCSS.productContainer}>
      <img
        className={productCSS.productImg}
        src={productData.image}
        alt={productData.title}
      />

      <h2 className={productCSS.productText}>{productData.title}</h2>
      <p className="mt-3">${productData.price}</p>

      <span>
        <Link to={`/product/:${productData.id}`}>
          <button onClick={() => loadCurrentItem(productData)} className="btn btn-sm btn-primary m-2">View item</button>
        </Link>
        <button
           onClick={() => addToCart(productData.id)}
          className="btn btn-sm btn-primary m-2"
        >
          Add to Cart
        </button>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    // loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);