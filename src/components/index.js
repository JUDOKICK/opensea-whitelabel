import styled from "styled-components";

export const Button = styled.button`
  background-color: #e62249;
  border: none;
  border-radius: 9px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font: inherit;
  text-align: center;
  text-decoration: none;
  padding: 8px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
