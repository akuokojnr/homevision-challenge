import styled from "styled-components";

import { Row } from "../common";

import media from "../../utils/media";

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const Content = styled(Row)`
  padding: 4rem 0;

  ${media.sm`
    margin: 0 -1rem 0 0;
  `};
`;

export const BottomBoundary = styled.div`
  height: 3rem;
  width: 100%;
  margin: 0 0 -3rem;
`;
