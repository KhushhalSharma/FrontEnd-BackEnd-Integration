import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getMyCartItems } from "../store/cart/cart.action";
const MyCartItems = () => {
  const dispatch = useDispatch();
  const tokendata = useSelector((store) => {
    return store.auth.token;
  });

  const cart = useSelector((store) => {
    return store.cart.data;
  });
  console.log(cart);

  useEffect(() => {
    dispatch(getMyCartItems(tokendata));
  }, []);
  return (
    <div>
      <h1>My Cart</h1>
      {cart.length === 0
        ? "No items"
        : cart.map((el) => {
            return <div key={el._id}>{el.name}</div>;
          })}
    </div>
  );
};

export default MyCartItems;
