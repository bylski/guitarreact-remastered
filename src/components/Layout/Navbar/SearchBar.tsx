import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material";

const SearchBar: React.FC = (props) => {
  const theme = useTheme();
  const { palette, typography } = theme;

  return (
    <Fragment>
      <TextField
        hiddenLabel
        //   id="filled-hidden-label-small"
        color="primary"
        variant="outlined"
        size="small"
        placeholder="Search for product"
        sx={{
          input: { color: palette.primary.contrastText },
          fontFamily: typography.h1.fontFamily,
          marginLeft: "3rem",
          marginRight: "1.5rem",
          flexGrow: 2,
          maxWidth: "400px"
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {" "}
              <SearchIcon sx={{ fill: palette.primary.contrastText }} />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Fragment>
  );
};

export default SearchBar;
