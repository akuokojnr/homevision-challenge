import React from "react";
import { Flex } from "rebass/styled-components";

const Row = React.forwardRef((props, ref) => (
  <Flex ref={ref} {...props} flexWrap="wrap" />
));

export default Row;
