import React from "react";

import Card from "../Card";
import LoadingCards from "./LoadingCards";

import { Column } from "../common";

const ContentInner = ({ isLoading, data }) => {
  return (
    <>
      {data &&
        data.houses.map(({ id, ...rest }) => (
          <Column width={[1, 1 / 2, 1 / 3, 1 / 4]} key={`house-id-${id}`}>
            <Card {...rest} />
          </Column>
        ))}
      {isLoading && <LoadingCards isLoading={isLoading} />}
    </>
  );
};

export default ContentInner;
