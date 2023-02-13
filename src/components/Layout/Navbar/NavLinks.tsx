import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const NavLinks: React.FC = (props) => {
  const { palette, typography } = useTheme();

  return (
    <Fragment>
      <Button
        variant={"text"}
        sx={{
          color: palette.secondary.contrastText,
          height: "100%",
          paddingInline: "1rem",
          fontFamily: typography.h1.fontFamily,
          fontSize: "13px"
        }}
      >
        Guitars
      </Button>
      <Button
        variant={"text"}
        sx={{
          color: palette.secondary.contrastText,
          height: "100%",
          paddingInline: "1rem",
          fontFamily: typography.h1.fontFamily,
          fontSize: "13px"
        }}
      >
        Amplifiers
      </Button>
      <Button
        variant={"text"}
        sx={{
          color: palette.secondary.contrastText,
          height: "100%",
          paddingInline: "1rem",
          fontFamily: typography.h1.fontFamily,
          fontSize: "13px"
        }}
      >
        Accessories
      </Button>
    </Fragment>
  );
};

export default NavLinks;
