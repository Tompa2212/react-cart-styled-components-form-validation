import styled from "styled-components";
import Form from "./Form";
import Cart from "./Cart";

import { useState, useEffect } from "react";

const checkWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

function App() {
  const [width, setWidth] = useState(checkWidth());

  const handeResize = () => {
    setWidth(checkWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", handeResize);

    return () => {
      window.removeEventListener("resize", handeResize);
    };
  });

  return (
    <main>
      <div className="container">
        <Wrapper>
          <h1>Checkout</h1>
          {width >= 790 ? (
            <div className="order">
              <Form />
              <Cart />
            </div>
          ) : (
            <div className="order">
              <Cart />
              <Form />
            </div>
          )}
        </Wrapper>
      </div>
    </main>
  );
}

const Wrapper = styled.section`
  @media screen and (max-width: 790px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
  h1 {
    margin-bottom: 5rem;
    font-size: 3rem;
  }
  label {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--dark-gray);
    font-size: 1.4rem;
    font-weight: 600;
  }

  .order {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    align-items: center;

    @media screen and (max-width: 790px) {
      grid-template-columns: 1fr;
      grid-column-gap: 0;
      grid-row-gap: 4rem;
    }
  }

  .checkout__contact {
    margin-bottom: 8rem;
  }

  .checkout__country {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
  }

  @media screen and (max-width: 820px) {
    .checkout__country {
      grid-template-columns: 1fr;
    }

    .checkout__country .select {
      margin-bottom: 1rem;
    }
  }
`;

export default App;
