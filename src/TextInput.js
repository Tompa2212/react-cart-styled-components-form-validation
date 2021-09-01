import styled from "styled-components";
import { useGlobalContext } from "./context";

const TextInput = ({ placeholder, type, icon, name }) => {
  const { purchase, handleChange } = useGlobalContext();
  return (
    <Wrapper>
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={purchase[name]}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1.5rem;

  padding: 1.2rem 2rem;
  margin-bottom: 3rem;
  border: 1px solid var(--light-gray);
  border-radius: 1rem;

  svg {
    fill: var(--light-gray);
    width: 2.2rem;
    height: 2.2rem;
  }

  input {
    font-size: 1.4rem;
    color: black;
    font-family: inherit;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    width: 100%;

    &::placeholder {
      font-weight: 600;
    }
  }

  input:focus {
    outline: none;
  }
`;

export default TextInput;
