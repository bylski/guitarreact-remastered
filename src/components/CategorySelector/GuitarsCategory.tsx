import { SxProps } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Categories } from "../../store/AppContext";
import { useNavigate } from "react-router";

const GuitarsCategory: React.FC<{
  animationVariant: Variants;
  iconButtonSx: SxProps;
  gridElementAttributes: Object;
  typographyAttributes: Object;
  isSelected: boolean;
  onSelectCategory: (selectedCategory: Categories) => void;
}> = (props) => {
  const {
    isSelected,
    animationVariant: iconVariants,
    gridElementAttributes,
    typographyAttributes,
    iconButtonSx,
  } = props;

  const navigate = useNavigate();
  const { palette } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const mouseClickHandler = () => {
    navigate("/guitars");
    props.onSelectCategory("guitars");
  };

  const animationAttributes = {
    variants: iconVariants,
    initial: "hidden",
    animate: isHovered || isSelected ? "draw" : "",
  };

  return (
    <Grid2 {...gridElementAttributes}>
      <IconButton
        sx={
          isSelected
            ? {
                ...iconButtonSx,
                backgroundColor: `${palette.primary.dark} !important`,
                borderColor: `${palette.primary.main} !important`,
              }
            : { ...iconButtonSx }
        }
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onClick={mouseClickHandler}
      >
        <SvgIcon
          sx={{
            fontSize: "35px",
            fill: "white",
            position: "relative",
            top: "-8px",
          }}
        >
          <svg
            viewBox="0 0 505 507"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              {...animationAttributes}
              d="M82.5 341.5L123.5 382.25L164.5 423"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <motion.path
              {...animationAttributes}
              d="M287 177.5L278 169.5L275.725 167.925C272.912 165.977 269.964 164.232 266.904 162.702V162.702C262.645 160.573 258.186 158.869 253.593 157.616L249.5 156.5L237.042 154.235C234.353 153.746 231.625 153.5 228.891 153.5V153.5C225.31 153.5 221.74 153.922 218.258 154.758L217.361 154.973C213.136 155.987 209.051 157.513 205.196 159.518L198.5 163L189 169.5L184 174L180.372 177.628C178.801 179.199 177.494 181.013 176.5 183V183L175 186L172 194L168 203.5L166.396 207.243C164.468 211.742 162.212 216.093 159.647 220.261L159.5 220.5L157 224V224C155.338 226.327 153.437 228.474 151.329 230.406L148.5 233L147.059 234.12C145.024 235.704 142.856 237.11 140.58 238.324V238.324C137.867 239.771 135.014 240.937 132.064 241.805L128 243L115 246L105.5 248L91 252L83 254.5L71.5 259L62.5 262.5L53.5 267.5L52.2007 268.341C47.409 271.441 42.8916 274.946 38.6978 278.817L38.5 279L32.5 285.5L25 293.5L19 302L17.6265 304.247C14.8798 308.742 12.4925 313.447 10.4869 318.318L10 319.5L9.24484 322.017C7.75056 326.998 6.64708 332.088 5.94446 337.241L5.5 340.5V355L5.86513 364.493C5.95487 366.827 6.24602 369.148 6.73531 371.431V371.431C7.24407 373.806 7.96506 376.129 8.88957 378.375L11 383.5L16.5 395L22 406L27 414L33 422.5L41.5 434L50 443.5L60.5 454L69 462L84 474L98 482.5L105.28 486.814C109.421 489.268 113.734 491.42 118.185 493.253L120 494L133.5 497.5L139.203 498.597C144.061 499.531 148.982 500.103 153.924 500.309L158.5 500.5L170 500L173 499.5L177.052 498.342C183.667 496.452 190.068 493.885 196.155 490.682L196.5 490.5L205.5 484.5L213 478L218.5 472.5L227.5 464L231 460L238 450L244 440L247 433L249 427.5L251 421.5L253.5 413.5L255 406.5L257 396.5L258 389.5L260 381L262 374L264 368.5L265.5 365L268.29 360.118C269.093 358.712 270.08 357.42 271.225 356.275V356.275C272.073 355.427 273.003 354.665 274.001 354L277 352L281.5 349L288 345L294.5 341.5L306 336.5V336.5C311.323 334.171 316.431 331.379 321.266 328.156L323 327L328.5 323L333 319L337 315L341 310L345 304L347 300.444C348.656 297.5 349.837 294.313 350.5 291V291L350.606 290.469C351.534 285.829 352.132 281.129 352.394 276.404L352.5 274.5V272.5V267.5L352.433 266.725C352.145 263.423 351.497 260.162 350.5 257V257L348.333 250.067C348.112 249.357 347.833 248.666 347.5 248V248L346.5 246L342.5 239L339.5 234L336 229.5L332.5 225.5L327.5 219.5"
              stroke="white"
              strokeWidth="22"
            />
            <motion.circle
              {...animationAttributes}
              cx="221"
              cy="284"
              r="44.5"
              stroke="white"
              strokeWidth="22"
            />
            <motion.path
              {...animationAttributes}
              d="M230 238L384 88.5M384 88.5L392 73.5L400.5 57.5M384 88.5L418.5 120.5M400.5 57.5L390.5 47.5M400.5 57.5L412 45C412 45 418.095 39.21 422 35.5M422 35.5C418.485 31.5948 412.5 25 412.5 25M422 35.5C430.006 28.08 442.5 16.5 442.5 16.5M442.5 16.5L432 6M442.5 16.5L454 6C454 6 502 7.5 499 53L490.5 63M490.5 63L499 71.5M490.5 63L470.5 83M470.5 83L480 92.5M470.5 83L449.5 104.5M449.5 104.5L457.5 113M449.5 104.5L433.5 113L418.5 120.5M418.5 120.5L266 275.5"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
            />
          </svg>
        </SvgIcon>
        <Typography
          {...typographyAttributes}
          sx={{ position: "relative", left: "-20px", paddingInline: "20px" }}
        >
          Guitars
        </Typography>
      </IconButton>
    </Grid2>
  );
};

export default GuitarsCategory;
