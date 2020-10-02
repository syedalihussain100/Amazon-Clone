import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(id, title, image, price, rating);
  const Removefrombasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="Checkoutproduct_image" src={image} alt="" />
      <div className="Checkoutproduct_info">
        <p className="Checkoutproduct_title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p className="fit_rating">✶</p>;
            })}
        </div>
        <button onClick={Removefrombasket} className="Remove-btn">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
