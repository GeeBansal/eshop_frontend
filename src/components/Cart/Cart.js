import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.items);
  console.log(items);
  // const content=items.map(item=><h1>{item.title}</h1>)
  return (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          quantity={item.quantity}
          price={item.price}
          title={item.title}
          totalPrice={item.totalPrice}
        />
      ))}
    </ul>
  );
};

export default Cart;
