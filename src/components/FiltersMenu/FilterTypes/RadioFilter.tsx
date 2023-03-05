import React, { Fragment, useEffect, useState } from "react";
import Filter from "./Filter";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, Fade } from "@mui/material";

const RadioFilter: React.FC<{
  onChange?: (state: string) => void;
  options: string[];
  name: string;
  mt: string;
}> = (props) => {
  const { palette, typography } = useTheme();

  const [selectedRadio, setSelectedRadio] = useState("");
  const radioChangeHandler = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const target = event.currentTarget as HTMLInputElement;
    setSelectedRadio(target.value);

    if (props.onChange) {
      props.onChange(target.value);
    }
  };

  const radioResetHandler = () => {
    setSelectedRadio("");
    if (props.onChange) {
      props.onChange("");
    }
  };

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
        <FormControl sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <FormLabel
              sx={{
                color: `${palette.secondary.contrastText} !important`,
                paddingBlock: "0.4rem",
              }}
              id="demo-radio-buttons-group-label"
            >
              {props.name}
            </FormLabel>
              <Fade in={selectedRadio !== ""} unmountOnExit>
                <Button
                  sx={{ fontSize: "12px" }}
                  onClick={radioResetHandler}
                  type="button"
                  variant="text"
                >
                  Clear
                </Button>
              </Fade>
          </Box>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ color: palette.secondary.contrastText }}
            value={selectedRadio}
          >
            {optionsToRender}
          </RadioGroup>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default RadioFilter;
