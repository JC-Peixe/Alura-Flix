import React from "react";
import styled from "styled-components";

import { TbBrandGithub as IconGithub } from "react-icons/tb";
import { FiLinkedin as IconLinkedin } from "react-icons/fi";

import { MarginLine } from "../UI";
import {
  bpSmall,
  primaryColor,
} from "../UI/variables";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  position: relative;
  height: 7rem;
  background-color: var(--old-gold);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;

  @media (max-width: ${bpSmall}) {
    height: auto;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 370px) {
    gap: 2rem;
  }

  @media (max-width: 290px) {
    gap: 1rem;
  }
`;

const TextFooter = styled.p`
  text-align: center;
  color: var(--cerulean);
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.2;
  border-right: 2px solid var(--cerulean);
  padding-right: 3rem;

  @media (max-width: 370px) {
    font-size: 1.1rem;
    letter-spacing: 0;
    padding-right: 2rem;
  }

  @media (max-width: 290px) {
    padding-right: 1rem;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: var(--cerulean);
  font-size: 5rem;

  transition: all 0.2s;

  :hover {
    color: ${primaryColor};
    transform: scale(1.2);
  }
`;

const MarginFooter = styled(MarginLine)`
  position: absolute;
  top: 0;
  left: 0;
  width: inherited;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <MarginFooter />
        <Logo />
        <Container>
          <TextFooter>
            Desenvolvido  por Bianca Blanco e Adaptado por Jônatas Cassiano(Peixe) durante o <br />
            programa "ONE - Oracle Next Education".{" "}
          </TextFooter>

          <NavStyled>
            <NavItem to="https://www.linkedin.com/in/jonatascgaraujo/" target="_blank">
              <IconLinkedin />
            </NavItem>
            <NavItem to="https://github.com/JC-Peixe" target="_blank">
              <IconGithub />
            </NavItem>
          </NavStyled>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
