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

const AccordionFilter: React.FC<{
  name: string;
  mt: string;
  children?: React.ReactNode;
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const [accordionShowAll, setAccordionShowAll] = useState(false);
  const [accordionButtonText, setAccordionButtonText] = useState<
    "Show More" | "Show Less"
  >("Show More");
  const toggleShowAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setAccordionShowAll((prev) => !prev);
    setAccordionButtonText((prev) => {
      if (prev === "Show More") {
        return "Show Less";
      } else {
        return "Show More";
      }
    });
  };

  return (
    <Accordion
      sx={{
        marginTop: props.mt,
        boxShadow: "none",
        "&::before": { content: "none" },
      }}
    >
      <AccordionSummary
        sx={{
          backgroundColor: palette.secondary.dark,
          paddingLeft: "0",
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h2.fontFamily}
          fontSize="16px"
          fontWeight="500"
          textAlign={"left"}
          marginBottom="0.5rem"
        >
          {props.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: palette.secondary.dark,
          paddingLeft: "0px",
          paddingTop: "0px",
        }}
      >
        {React.Children.count(props.children) > 5 && !accordionShowAll
          ? React.Children.toArray(props.children).slice(0, 5)
          : props.children}
        <Button type="button" onClick={toggleShowAll} variant="text">
          {accordionButtonText}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFilter;
