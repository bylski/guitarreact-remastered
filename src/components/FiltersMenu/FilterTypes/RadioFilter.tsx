import React, { Fragment } from "react";
import Filter from "./Filter";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const RadioFilter: React.FC<{ name: string; mt: string }> = (props) => {
  const { palette, typography } = useTheme();


  return (
    <Fragment>
      <Box sx={{ marginTop: props.mt }}>
        <FormControl>
          <FormLabel
            sx={{ color: palette.secondary.contrastText }}
            id="demo-radio-buttons-group-label"
          >
            {props.name}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ color: palette.secondary.contrastText }}
          >
            <FormControlLabel
              value="head"
              control={<Radio />}
              label="Head"
            />
            <FormControlLabel value="combo" control={<Radio />} label="Combo" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default RadioFilter;
