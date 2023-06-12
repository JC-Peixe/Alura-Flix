import styled from "styled-components";
import styles from "./Botao.module.css"
import React from "react";
import {
 
    primaryColor,
    whiteColor,
    redColorFolly,
    blueColorLight,
  } from "../UI/variables";


  
export default function Botao ({children}){
    
    return (
    <button className={styles.botao}>{children}</button>
    )
}
export const Button = styled.button`
  font-weight: 600;
  font-size: 2.1rem;
  padding: 1.5rem 3rem;
  border-radius: 0.7rem;
  background-color: transparent;
  transition: all 0.3s;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  border: none;
  background-color: ${(props) =>
    props.primary ? primaryColor : redColorFolly };
  color: ${(props) => (props.primary ? whiteColor : blueColorLight)};

  :hover {
    opacity: 0.85;
  }
`;
export const ButtonSecondary = styled(Button)`
  color: ${whiteColor};
  border: 1px solid ${redColorFolly};
  background-color: transparent;

  :hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
`;