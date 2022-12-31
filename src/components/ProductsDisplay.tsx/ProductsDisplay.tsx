import React from "react";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const ProductsDisplay: React.FC = (props) => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Container maxWidth={false} disableGutters={true} sx={{backgroundColor: palette.secondary.dark}}>
      <h1>HEY</h1>
    </Container>
  );
};

export default ProductsDisplay;
