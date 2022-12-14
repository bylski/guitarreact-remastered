import { useTheme } from "@mui/material/styles";
import { Button, ButtonBase, SxProps } from "@mui/material";
import React, { Fragment, useState } from "react";

const SwitchButton: React.FC<{
  buttons: { text: string; additionalSx?: SxProps }[];
  preActivate?: { buttonText: string };
}> = (props) => {
  const theme = useTheme();
  const { palette } = theme;

  const [activeButton, setActiveButton] = useState(props.preActivate?.buttonText.toUpperCase() || "");

  // Diffrentiate between active buttons with innerText of the button
  const buttonSelectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    console.log(target.innerText)
    setActiveButton(target.innerText.toUpperCase());
  };

  const commonSx: SxProps = {
    borderColor: palette.secondary.light,
    color: palette.secondary.contrastText,
    transition: "0.2s ease",
    "&:hover": {
      color: palette.primary.main,
    },
  };

  const activeSx: SxProps = {
    ...commonSx,
    color: `${palette.primary.contrastText} !important`,
    backgroundColor: `${palette.primary.dark} !important`,
    borderColor: palette.primary.main,
  };

  const buttonsToRender = props.buttons.map((button, i) => {
    let marginBottom = "5px";
    if (i === props.buttons.length - 1) {
      marginBottom = "0px";
    }

    let active = false;
    if (activeButton === button.text.toUpperCase()) {
        active = true;
    }

    const sxToUse = active ? activeSx : commonSx;
    return (
      <Button
        onClick={buttonSelectHandler}
        sx={{ ...sxToUse, ...button.additionalSx, marginBottom }}
        variant="outlined"
        key={`SwitchButton${i}`}
      >
        {button.text}
      </Button>
    );
  });

  return <Fragment>{buttonsToRender}</Fragment>;
};

export default SwitchButton;
