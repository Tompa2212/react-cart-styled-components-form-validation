import { BsFillEnvelopeFill, BsPersonFill, BsMap } from "react-icons/bs";
import { FaPhoneAlt, FaHome, FaCity, FaGlobeEurope } from "react-icons/fa";

import TextInput from "./TextInput";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Form = () => {
  const { data, handleSubmit, countries } = useGlobalContext();

  return (
    <form className="checkout__form" onSubmit={handleSubmit}>
      <div className="checkout__contact">
        <h3>Contact information</h3>
        <div className="form-control">
          <label>E-mail</label>
          <TextInput
            type="email"
            icon={<BsFillEnvelopeFill />}
            placeholder="Enter your email..."
            name="email"
          />
        </div>
        <div className="form-control">
          <label>Phone</label>
          <TextInput
            type="text"
            icon={<FaPhoneAlt />}
            placeholder="Enter your phone..."
            name="phone"
          />
        </div>
      </div>
      <div className="checkout__shipping">
        <h3>Shipping address</h3>
        <div className="form-control">
          <label htmlFor="full_name">Full name</label>
          <TextInput
            type="text"
            icon={<BsPersonFill />}
            placeholder="Rodney Cotton"
            name="full_name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <TextInput
            type="text"
            icon={<FaHome />}
            placeholder="Your address.."
            name="address"
          />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <TextInput
            type="text"
            icon={<FaCity />}
            placeholder="Your city.."
            name="city"
          />
        </div>
        <div className="checkout__country">
          <div className="form-control">
            <label>Country</label>
            {/* <CustomSelect>
              <FaGlobeEurope />
              <select
                name="country"
                onChange={handleChange}
                value={purchase.country}
              >
                <option value="" disabled className="select-placeholder">
                  Select country...
                </option>
                {countries.map((country) => {
                  const { name } = country;
                  return <option value={name}>{name}</option>;
                })}
              </select>
              <div className="arrow-cont">
                <span className="arrow"></span>
              </div>
            </CustomSelect> */}
          </div>
          <div className="form-control">
            <label>Postal code</label>
            <TextInput
              type="text"
              icon={<BsMap />}
              name="postal_code"
              placeholder="Your postal code.."
            />
          </div>
        </div>
        <div className="form-control d-flex">
          {/* <input
            type="checkbox"
            className="checkbox"
            name="save_info"
            checked={purchase.save_info}
            onChange={handleChange}
          /> */}
          <label
            style={{
              display: "inline-block",
              marginLeft: "1rem",
              marginBottom: "0",
            }}
          >
            Save this information for next time
          </label>
        </div>
        <button className="btn btn--right">Continue</button>
      </div>
    </form>
  );
};

const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--light-gray);
  border-radius: 0.5rem;
  padding: 0.88rem;
  font-size: inherit;
  color: var(--light-gray);
  cursor: pointer;
  line-height: 1.5;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  @media screen and (max-width: 820px) {
    margin-bottom: 3rem;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-weight: 600;
    font-size: inherit;
    color: inherit;
    cursor: inherit;
    line-height: inherit;
  }

  svg {
    fill: var(--light-gray);
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem;
  }

  .arrow-cont {
    width: 2.7rem;
    height: 2rem;
    border-radius: 0.2rem;
    background: hsla(0, 0%, 88%, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow {
      display: block;
      width: 1rem;
      height: 0.7rem;
      background-color: var(--dark-gray);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }
`;

export default Form;
