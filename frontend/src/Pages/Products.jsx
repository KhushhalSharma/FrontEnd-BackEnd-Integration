import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../store/products/product.action";
const Products = () => {
  const data = useSelector((store) => {
    return store.products.data;
  });
  const dipatch = useDispatch();
  useEffect(() => {
    dipatch(getData());
  }, [dipatch]);
  return (
    <div>
      <h1>Products</h1>
      {data.map((el) => {
        return <div key={el._id}>{el.name}</div>;
      })}
    </div>
  );
};

export default Products;
