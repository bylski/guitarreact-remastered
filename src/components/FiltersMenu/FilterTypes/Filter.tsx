import {
  TextField,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter: React.FC<{
  name: string;
  mt: string;
  children?: React.ReactNode;
}> = (props, children) => {
  const theme = useTheme();
  const { palette, typography } = theme;

 

  return (
    <Stack mt={props.mt} height="fit-content" width="100%">
      <Typography
        sx={{ flexGrow: 1 }}
        color={palette.secondary.contrastText}
        fontFamily={typography.h2.fontFamily}
        fontSize="14px"
        fontWeight="500"
        textAlign={"left"}
        marginBottom="0.5rem"
      >
        {props.name}
      </Typography>
      {props.children}
    </Stack>
  );
};

export default Filter;
