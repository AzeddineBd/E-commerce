import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("calculated");

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        userInfo,
        setUserInfo,
        shippingMethod,
        setShippingMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
