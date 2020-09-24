import styled from "styled-components";

import media from "../../utils/media";

export const Nav = styled.nav`
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  position: sticky;
  top: 0;
  z-index: 3;
  background: white;

  ${media.md`
    padding: 1.5rem 0;
  `};
`;

export const Brand = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;
