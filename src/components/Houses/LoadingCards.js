import React from "react";

import Card from "../Card";

import { Column } from "../common";

const LoadingCards = ({ isLoading }) => (
  <>
    {Array.from({ length: 4 }, (_, i) => (
      <Column width={[1, 1 / 2, 1 / 3, 1 / 4]} key={`loading-card-${i}`}>
        <Card
          price="124098"
          address="4 Pumpkin Hill Street Antioch, TN 37013"
          homeowner="John Doe"
          loading={isLoading}
        />
      </Column>
    ))}
  </>
);

export default LoadingCards;
