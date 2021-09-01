import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, increase, decrease } = useGlobalContext();
  const shipping = 19;

  return (
    <Wrapper>
      <div className="cart">
        {cart.cartItems.map((item) => {
          const { id, title, oldPrice, price, img, amount } = item;
          return (
            <div className="cart__item" key={id}>
              <figure>
                <img src={img} alt={title} />
              </figure>
              <div className="cart__info">
                <h3>{title}</h3>
                <p>
                  <span className="price">${price}</span>{" "}
                  <span className="old-price">${oldPrice}</span>
                </p>
              </div>
              <div className="cart__amount">
                <button className="icon-cont" onClick={() => decrease(id)}>
                  <FaMinus />
                </button>{" "}
                <p>{amount}</p>{" "}
                <button className="icon-cont" onClick={() => increase(id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total">
        <div className="d-flex">
          <h4>Shipping</h4>
          <p>${shipping}</p>
        </div>
        <div className="d-flex">
          <h4>Items</h4>
          <p>{cart.amount}</p>
        </div>
        <div className="d-flex">
          <h4>Total</h4>
          <p>${cart.total + shipping}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-self: flex-end;
  background: hsla(0, 0%, 95%, 1);
  padding: 4rem;
  border-radius: 1rem;

  @media screen and (max-width: 790px) {
    justify-self: stretch;
  }

  .cart {
    &__item {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-row-gap: 1.5rem;
      grid-column-gap: 2.5rem;

      margin-bottom: 4rem;
    }

    &__info {
      @media screen and (max-width: 730px) {
        grid-row: 1 / span 2;
      }
      h4 {
        margin-bottom: 2rem;
      }
      p {
        display: flex;
        justify-content: space-between;
      }

      .price {
        color: var(--orange);
      }

      .old-price {
        text-decoration: line-through;
      }

      @media screen and (max-width: 970px) {
        p {
          flex-direction: column;
        }

        span {
          margin-bottom: 1rem;
        }
      }
    }

    &__amount {
      align-self: end;
      justify-self: stretch;

      width: 100%;
      padding: 1.3rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;

      border: 1px solid var(--light-gray);
      border-radius: 1rem;

      @media screen and (max-width: 930px) {
        grid-column: 1 / -1;
      }

      p {
        font-weight: 600;
        text-align: center;
      }

      .icon-cont {
        cursor: pointer;
        width: 2.3rem;
        height: 2.3rem;
        background: hsla(0, 0%, 88%, 1);
        border: none;
        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 1.2rem;
          height: 1.2rem;
          fill: var(--dark-gray);
        }
      }
    }
  }

  figure {
    overflow: hidden;
    border-radius: 1rem;

    grid-row: 1 / span 2;
  }
  img {
    width: 100%;
    max-width: 20rem;
    object-fit: cover;
  }

  .total div {
    justify-content: space-between;
    padding: 1.2rem 0;
    border-top: 1px solid hsla(0, 0%, 74%, 1);
    p {
      font-weight: 600;
    }
  }
`;

export default Cart;
