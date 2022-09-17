import React from "react";
import productImg from "../../../assets/images/product_02.1.jpg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="product-img" />
      </div>

      <div className="product__content">
        <h5>
          <Link>Burger</Link>
        </h5>
        <div>
          <span>$24.00</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
