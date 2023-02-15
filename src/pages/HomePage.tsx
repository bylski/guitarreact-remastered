import Container from "@mui/material/Container";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import SalesCarousel from "../components/SalesCarousel/SalesCarousel";
import CategorySelector from "../components/CategorySelector/CategorySelector";
import ProductsDisplay from "../components/ProductsDisplay.tsx/ProductsDisplay";
import { Outlet } from "react-router";
import ComparisonWindow from "../components/ComparisonWindow/ComparisonWindow";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Container
      id={"mainContainer"}
      sx={{
        [theme.breakpoints.down("md")]: {
          marginTop: `calc(60px + ${theme.spacing(5)})`,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: `calc(70px + ${theme.spacing(5)})`,
        },
        maxWidth: "100%",
        minHeight: "fit-content",
        // backgroundColor: palette.secondary.dark,
      }}
      maxWidth={false}
      disableGutters={true}
    >
      <SalesCarousel />
      <Container
        id={"pageContent"}
        disableGutters={true}
        maxWidth={false}
        sx={{ maxWidth: "1800px", paddingInline: "12px" }}
      >
        <CategorySelector />
        <Outlet />
      </Container>
      <ComparisonWindow />
    </Container>
  );
};

export default HomePage;
