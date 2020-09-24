import styled, { keyframes } from "styled-components";

import media from "../../utils/media";

const loadingKeyframe = keyframes`
  100% { 
    transform: translate3d(100%, 0, 0); 
  } 
`;

export const Wrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 0 2rem 0;
  transition: all 0.2s ease-in;
  font-family: ${({ loading }) => loading && "Blokk"};

  ${media.sm`
    margin: 0 1rem 1.5rem 0;
  `};

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 5px 12px;
  }

  &::after {
    display: ${({ loading }) => (loading ? "block" : "none")};
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(-100%, 0, 0);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${loadingKeyframe} 0.8s infinite;
  }
`;

export const ImgWrap = styled.div`
  max-height: 180px;
  min-height: 180px;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray2};
  overflow: hidden;

  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: ${({ loading }) => loading && "none"};
  }
`;

export const Header = styled.div`
  padding: 1rem;

  ${media.md`
    min-height: 125px;
  `};
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Address = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  margin: 0.5rem 0 0;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const Footer = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gray3};

  p {
    &:first-of-type {
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.gray};
    }

    &:last-of-type {
      font-weight: 600;
      margin: 0.3rem 0 0;
    }
  }
`;
