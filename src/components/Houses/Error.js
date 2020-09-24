import React from "react";
import styled from "styled-components";

import media from "../../utils/media";

const Error = ({ message, handleError }) => (
  <Button onClick={handleError}>
    <span>{message}</span>
  </Button>
);

export default Error;

const Button = styled.button`
  font-size: 0.9rem;
  max-width: 400px;
  width: 100%;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  margin: 3rem auto 0;
  background: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: white;
  }

  ${media.sm`
    padding: 1rem;
    transform: translate3d(-1rem, 0, 0);
  `};

  ${media.md`
    font-size: 1rem;
  `};
`;
