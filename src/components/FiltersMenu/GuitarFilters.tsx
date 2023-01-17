import {
  TextField,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  CheckboxProps,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import Filter from "./Filter";
import AccordionFilter from "./AccordionFilter";

const GuitarFilters: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;

  const producerBrands = [
    "Ibanez",
    "Jackson",
    "Charvel",
    "Gibson",
    "Epiphone",
    "Chapman",
  ];

  const [checkBoxes, setCheckBoxes] = useState<{
    content: Array<{ name: string; isChecked: boolean }>;
    change: boolean;
  }>({
    content: producerBrands.map((name) => ({ name, isChecked: false })),
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

  useEffect(() => {
    console.log("HEY");
  }, [checkBoxes]);

  const brandCheckBoxes = checkBoxes.content.map((checkbox) => {
    let additionalAttributes: CheckboxProps = {};
    if (checkbox.isChecked) {
      additionalAttributes = { defaultChecked: true };
    }
    return (
      <FormGroup>
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

  return (
    <Fragment>
      <Filter name="Price ($)" mt={"1.5rem"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TextField variant="outlined" label="From" />
          <Typography
            color={palette.secondary.contrastText}
            fontFamily={typography.h2.fontFamily}
            fontSize="22px"
            fontWeight="300"
            textAlign={"center"}
            px="0.5rem"
          >
            -
          </Typography>
          <TextField variant="outlined" label="To" />
        </Box>
      </Filter>
      <AccordionFilter name="Brand" mt={"1.5rem"}>
        {brandCheckBoxes}
      </AccordionFilter>
    </Fragment>
  );
};

export default GuitarFilters;
