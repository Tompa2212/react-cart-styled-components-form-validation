import React, { useContext, useEffect, useState } from "react";
import data from "./data";

const AppContext = React.createContext();

const cartInitialState = {
  cartItems: data,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  //state for form

  const [purchase, setPurchase] = useState({
    email: "",
    phone: "",
    full_name: "",
    address: "",
    city: "",
    country: "",
    postal_code: "",
    save_info: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPurchase({ ...purchase, [name]: value });
  };

  //state for cart

  const [cart, setCart] = useState(cartInitialState);

  const increase = (id) => {
    let tempCart = cart.cartItems.map((item) => {
      if (id === item.id) {
        return { ...item, amount: item.amount + 1 };
      }

      return item;
    });

    setCart({ ...cart, cartItems: tempCart });
  };

  const decrease = (id) => {
    let tempCart = cart.cartItems
      .map((item) => {
        if (id === item.id) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      })
      .filter((item) => item.amount > 0);

    setCart({ ...cart, cartItems: tempCart });
  };

  const get_totals = () => {
    let { total, amount } = cart.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    setCart({ ...cart, total, amount });
  };

  useEffect(() => {
    get_totals();
  }, [cart.cartItems]);

  return (
    <AppContext.Provider
      value={{ purchase, setPurchase, handleChange, cart, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
