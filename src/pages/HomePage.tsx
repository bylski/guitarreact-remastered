import Container from "@mui/material/Container";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import SalesCarousel from "../components/SalesCarousel/SalesCarousel";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Container
      sx={{
        [theme.breakpoints.down("md")]: {
          marginTop: `calc(60px + ${theme.spacing(5)})`,
        },
        [theme.breakpoints.up("md")]: {
          marginTop: `calc(70px + ${theme.spacing(5)})`,
        },
        maxWidth: "100%",
        // backgroundColor: palette.secondary.dark,
      }}
      maxWidth={false}
      disableGutters={true}
    >
      <SalesCarousel/>
      {/* <Container maxWidth={false} disableGutters={true} sx={{}}>
        <Typography variant="h3" textAlign="center" sx={{ color: palette.secondary.contrastText }}>
          HOT SALES
        </Typography>
      </Container> */}
     
    </Container>
  );
};

export default HomePage;
