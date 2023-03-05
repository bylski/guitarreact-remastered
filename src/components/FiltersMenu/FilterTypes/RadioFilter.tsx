import React, { Fragment, useEffect, useState } from "react";
import Filter from "./Filter";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const RadioFilter: React.FC<{
  onChange?: (state: string) => void;
  options: string[];
  name: string;
  mt: string;
}> = (props) => {
  const { palette, typography } = useTheme();


  const [selectedRadio, setSelectedRadio] = useState("");
  const radioChangeHandler = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const target = event.currentTarget as HTMLInputElement;
    setSelectedRadio(target.value);

    if (props.onChange) {
      props.onChange(target.value);
    }
  }

  const optionsToRender = props.options.map((option, i) => {
    return (
      <FormControlLabel
        onChange={radioChangeHandler}
        value={option}
        control={<Radio />}
        label={option}
        key={`radio_${option}`}
      />
    );
  });


  return (
    <Fragment>
      <Box sx={{ marginTop: props.mt }}>
        <FormControl>
          <FormLabel
            sx={{ color: `${palette.secondary.contrastText} !important`, marginBottom: "0.5rem"}}
            id="demo-radio-buttons-group-label"
          >
            {props.name}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ color: palette.secondary.contrastText }}
          >
            {optionsToRender}
          </RadioGroup>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default RadioFilter;
