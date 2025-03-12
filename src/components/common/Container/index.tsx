import React from "react";
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
  Box,
} from "@mui/material";

interface ContainerProps extends MuiContainerProps {
  withPadding?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  withPadding = true,
  paddingTop,
  paddingBottom,
  ...props
}) => {
  return (
    <MuiContainer {...props}>
      <Box
        sx={{
          py: withPadding ? 4 : 0,
          pt: paddingTop !== undefined ? paddingTop : withPadding ? 4 : 0,
          pb: paddingBottom !== undefined ? paddingBottom : withPadding ? 4 : 0,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </MuiContainer>
  );
};

export default Container;
