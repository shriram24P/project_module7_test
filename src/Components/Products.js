import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState([]);

  const productsList = [];

  const fetchData = () => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        for (const dataItem in data) {
          // console.log(
          //     data[dataItem]['id'],
          //     data[dataItem]['newPrice'],
          //     data[dataItem]['oldPrice'],
          //     data[dataItem]['productImage'],
          //     data[dataItem]['productName']
          // );
          productsList.push({
            id: data[dataItem]["id"],
            "new-price": data[dataItem]["newPrice"],
            "old-price": data[dataItem]["oldPrice"],
            "product-image": data[dataItem]["productImage"],
            "product-name": data[dataItem]["productName"],
          });
        }
        setProducts(productsList);
      });
  };

  useEffect(() => {
    fetchData();
  });

  // console.log(products);
  // console.log(products['new-price']);

  return (
    <div className="products-container">
      <h3>Products</h3>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product["id"]}
              newPrice={product["new-price"]}
              oldPrice={product["old-price"]}
              productImage={product["product-image"]}
              productName={product["product-name"]}
              setCount={props.setCount}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;