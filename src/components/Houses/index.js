import React, { useState, useEffect, useRef } from "react";

import ContentInner from "./ContentInner";
import Error from "./Error";

import { Section, Container, Row } from "../common";
import { Title, Content, BottomBoundary } from "./styles";

import { useFetchHouses } from "../../utils/hooks";

const Houses = () => {
  const boundaryRef = useRef(null);
  const [page, setPage] = useState(0);
  const { isLoading, error, data } = useFetchHouses(page);

  // (NOTE: daniel) refresh page after retries;
  const handleError = () => {
    window.location.reload();
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);

    if (boundaryRef.current) {
      observer.observe(boundaryRef.current);
    }
  }, []);

  return (
    <Section>
      <Container>
        <Title>Find houses to purchase</Title>
        <Content>
          <Row flexWrap="wrap" width="100%">
            <ContentInner isLoading={isLoading} error={error} data={data} />
            <BottomBoundary ref={boundaryRef} />
            {error && (
              <Error
                message="Server encountered an error. Refresh page"
                handleError={handleError}
              />
            )}
          </Row>
        </Content>
      </Container>
    </Section>
  );
};

export default Houses;
