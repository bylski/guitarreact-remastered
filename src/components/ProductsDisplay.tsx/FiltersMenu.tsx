import React from "react";
import { Stack, Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwitchButton from "../UI/SwitchButton";

const FiltersMenu: React.FC = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;

  return (
    <Stack
      width="100%"
      minHeight={"800px"}
      py={"1.5rem"}
      px={"2rem"}
      bgcolor={palette.secondary.dark}
      borderRadius={"15px"}
    >
      <Box mb="1rem" borderBottom={"1px solid"} borderColor={ palette.secondary.light }>
        <Typography
          sx={{ flexGrow: 1 }}
          color={palette.secondary.contrastText}
          fontFamily={typography.h2.fontFamily}
          fontSize="26px"
          fontWeight="400"
          textAlign={"center"}  
        >
          Guitar Filters
        </Typography>
      </Box>
      <SwitchButton buttons={[{text: "Acoustic Guitars"}, {text: "Electric Guitars"}]} preActivate={{ buttonText: "Electric" }}/>
    </Stack>
  );
};

export default FiltersMenu;
