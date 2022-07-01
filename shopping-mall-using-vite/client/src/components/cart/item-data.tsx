import React from "react";
import { CartType } from "../../graphql/cart";

const ItemData = ({ imageUrl, price, title }: Partial<CartType>) => (
  <>
    <img className="cart-item__image" src={imageUrl} />
    <p className="cart-item__price">{price}</p>
    <p className="cart-item__title">{title}</p>
  </>
);

export default ItemData;
