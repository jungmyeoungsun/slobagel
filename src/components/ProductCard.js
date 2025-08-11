
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="pro_card">
      <Link to={`/detail/${product.id}`}>
        <img src={product.image} alt={product.title} className="pro_card_img" />
      </Link>
      <h4 className="pro_card_title">{product.title}</h4>
      <p className="pro_card_price">{product.price}</p>
    </div>
  );
};

export default ProductCard;