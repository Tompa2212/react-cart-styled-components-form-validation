import styled from "styled-components";
import { useGlobalContext } from "./context";

const TextInput = ({ placeholder, type, icon, name }) => {
  const { purchase, handleChange, errors } = useGlobalContext();
  return (
    <>
      <Wrapper>
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={purchase[name]}
          onChange={handleChange(name)}
        />
      </Wrapper>
      {errors[name] && <p className="error">{errors[name]}</p>}
    </>
  );
};

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1.5rem;

  padding: 1.2rem 2rem;
  border: 1px solid var(--light-gray);
  border-radius: 1rem; */
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;

    padding: 1.2rem 1.2rem 1.2rem 4.5rem;

    border: 1px solid var(--light-gray);
    border-radius: 0.5rem;

    color: black;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.4rem;

    &::placeholder {
      font-weight: 600;
    }

    &:focus {
      outline: transparent;
      border: 1px solid var(--orange);
      box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.7);
    }
  }

  svg {
    fill: var(--light-gray);
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 50%;
    left: 1rem;

    transform: translateY(-50%);
  }
`;

export default TextInput;
