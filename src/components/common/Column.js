import React from "react";
import { Box } from "rebass/styled-components";

const Column = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

export default Column;
