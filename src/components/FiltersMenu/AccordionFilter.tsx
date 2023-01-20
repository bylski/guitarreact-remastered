import {
  Typography,
  AccordionDetails,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  CheckboxProps,
} from "@mui/material";

import React, { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFilter: React.FC<{
  filterOptions: Array<string>;
  name: string;
  mt: string;
  children?: React.ReactNode;
  maxOptionsShown?: number;
  isRevealed?: boolean;
}> = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const [checkBoxes, setCheckBoxes] = useState<{
    content: Array<{ name: string; isChecked: boolean }>;
    change: boolean;
  }>({
    content: props.filterOptions.map((name) => ({ name, isChecked: false })),
    change: false,
  });

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const checkboxToChange = { name: value, isChecked: checked };
    setCheckBoxes((prev) => {
      const newContent = prev.content;
      for (let i = 0; i < newContent.length; i++) {
        if (newContent[i].name === checkboxToChange.name) {
          newContent[i].isChecked = checkboxToChange.isChecked;
        }
      }
      return { content: newContent, change: !prev.change };
    });
  };

  useEffect(() => {}, [checkBoxes]);

  const children = checkBoxes.content.map((checkbox, i) => {
    let additionalAttributes: CheckboxProps = {};
    if (checkbox.isChecked) {
      additionalAttributes = { defaultChecked: true };
    }
    return (
      <FormGroup key={`checkboxElement${i}`}>
        <FormControlLabel
          sx={{ color: palette.secondary.contrastText }}
          label={checkbox.name}
          control={
            <Checkbox
              {...additionalAttributes}
              value={checkbox.name}
              onChange={checkboxHandler}
            />
          }
        ></FormControlLabel>
      </FormGroup>
    );
  });

  const [accordionShowAll, setAccordionShowAll] = useState(false);
  const [expandAccordion, setExpandAccordion] = useState(props.isRevealed || false);
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

  let checkboxesToRender = children;
  if (props.maxOptionsShown !== undefined) {
    if (
      React.Children.count(children) > props.maxOptionsShown &&
      !accordionShowAll &&
      props.maxOptionsShown
    ) {
      checkboxesToRender = React.Children.toArray(children).slice(
        0,
        props.maxOptionsShown
      ) as JSX.Element[];
    }
  }
  return (
    <Accordion
      defaultExpanded={props.isRevealed}
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
        {checkboxesToRender}
        {props.maxOptionsShown !== undefined && (
          <Button type="button" onClick={toggleShowAll} variant="text">
            {accordionButtonText}
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFilter;
