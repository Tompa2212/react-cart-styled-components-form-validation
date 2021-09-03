import React, { useContext, useEffect, useState } from "react";
import data from "./data";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const AppContext = React.createContext();

const cartInitialState = {
  cartItems: data,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  //state for form

  const {
    handleSubmit,
    handleChange,
    data: purchase,
    errors,
  } = useForm({
    validations: {
      email: {
        validEmail: {
          value: true,
          message: "Email not valid",
        },
      },
      phone: {
        pattern: {
          value: "^[0-9]+$",
          message: "Phone number can contain only numbers",
        },
        required: {
          value: true,
          message: "This field is required",
        },
      },
      full_name: {
        pattern: {
          value: "^[A-Za-z ]*$",
          message: "This field isn't allowed to contain special characters",
        },
        required: {
          value: true,
          message: "This field is required",
        },
      },
      address: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      city: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      postal_code: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    onSubmit: () => alert("User submitted!"),
  });

  const countries = useFetch("https://restcountries.eu/rest/v2/all");

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setPurchase({ ...purchase, [name]: value });
  // };

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
      value={{
        purchase,
        handleChange,
        handleSubmit,
        errors,
        cart,
        increase,
        decrease,
        countries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
