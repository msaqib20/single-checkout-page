import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Products from "../components/Products";
import Cart from "../components/Cart";
import data from "./api/data";

export default function Home() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // Adding number of product items to the cart list

  const onAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const isValid = (value) => {
    return typeof value !== "undefined";
  };

  // Decreasing number of products items from cart list

  const onRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (isValid(productExist))
      if (productExist.qty === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else if (productExist.qty > 0) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, qty: productExist.qty - 1 }
              : item
          )
        );
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Nintex Single Checkout Page</title>
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 ">
        <Header />
        <div className="flex shadow-md ">
          <Products
            onRemoveProduct={onRemoveProduct}
            onAddProduct={onAddProduct}
            products={products}
          />
          <Cart onAddProduct={onAddProduct} cartItems={cartItems} />
        </div>
      </main>
    </div>
  );
}
