import { SxProps } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Categories } from "../../store/AppContext";

const AmplifiersCategory: React.FC<{
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

  const { palette } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const mouseClickHandler = () => {
    props.onSelectCategory("amplifiers");
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
            left: "-8px",
            top: "-8px",
          }}
        >
          <svg
            viewBox="0 0 508 466"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              {...animationAttributes}
              d="M11.899 174.539L11.5 190.5V408L11.5955 408.955C11.8632 411.632 12.5813 414.246 13.7193 416.684C14.8973 419.209 16.5077 421.508 18.4776 423.478L19.1751 424.175C20.0562 425.056 21.0222 425.848 22.059 426.539L22.5841 426.889C24.1809 427.954 25.961 428.714 27.8344 429.13C28.9415 429.376 30.0722 429.5 31.2063 429.5H474.032C475.342 429.5 476.65 429.4 477.945 429.201L479.645 428.939C481.533 428.649 483.355 428.025 485.025 427.097C486.335 426.369 487.538 425.462 488.597 424.403L491 422L493.617 419.056C494.533 418.025 495.285 416.858 495.846 415.597C496.607 413.885 497 412.032 497 410.158V175.085C497 172.076 496.245 169.116 494.805 166.475C494.269 165.494 493.644 164.565 492.936 163.699L489.5 159.5L487.288 157.288C486.435 156.435 485.45 155.725 484.37 155.185C482.812 154.406 481.093 154 479.35 154H25.9877C24.6805 154 23.3913 154.304 22.2221 154.889C21.4127 155.294 20.6738 155.826 20.0338 156.466L19.0514 157.449C18.3518 158.148 17.7147 158.908 17.1473 159.718L16.4455 160.721C15.1543 162.565 14.1162 164.575 13.3589 166.695C12.4587 169.216 11.9659 171.863 11.899 174.539Z"
              stroke="white"
              strokeWidth="22"
            />
            <motion.path
              {...animationAttributes}
              d="M90.5 61.5V83V83C90.5 91.964 94.061 100.561 100.399 106.899L104.5 111V111C113.784 120.284 126.376 125.5 139.506 125.5H183H226H297.5H369H380.358C389.413 125.5 398.097 121.903 404.5 115.5V115.5C410.903 109.097 414.5 100.413 414.5 91.3579V79.5V61.5M168 39.5V36.6066C168 29.8153 170.698 23.3022 175.5 18.5V18.5C180.302 13.6978 186.815 11 193.607 11H313.893C320.685 11 327.198 13.6978 332 18.5V18.5C336.802 23.3022 339.5 29.8153 339.5 36.6066V39.5"
              stroke="white"
              strokeWidth="22"
            />
            <motion.path
              {...animationAttributes}
              d="M24 154L20 152L15.8677 149.934C15.293 149.646 14.7684 149.268 14.314 148.814V148.814C13.7763 148.276 13.3461 147.641 13.0465 146.942L12.7739 146.306C12.2633 145.114 12 143.832 12 142.535V133V71.6976C12 68.9229 12.5108 66.1719 13.5068 63.5822V63.5822C14.1665 61.8671 15.0328 60.2389 16.0866 58.7335L17.2216 57.1119C17.7396 56.3721 18.3211 55.6789 18.9597 55.0403V55.0403C21.8668 52.1332 25.8097 50.5 29.9209 50.5H35H476.5V50.5C480.047 50.5 483.474 51.7817 486.15 54.109L491.16 58.4656C492.707 59.8108 493.998 61.4248 494.97 63.2298V63.2298C496.302 65.7045 497 68.4713 497 71.282V110.25V133.994C497 145.237 487.74 154.274 476.5 154V154"
              stroke="white"
              strokeWidth="22"
            />
            <motion.path
              {...animationAttributes}
              d="M38 455H79"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <motion.path
              {...animationAttributes}
              d="M234 383H275"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <motion.path
              {...animationAttributes}
              d="M434 455H475"
              stroke="white"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <motion.path
              {...animationAttributes}
              d="M165 86.5C165 95.0604 158.06 102 149.5 102C140.94 102 134 95.0604 134 86.5C134 77.9396 140.94 71 149.5 71C158.06 71 165 77.9396 165 86.5Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M212 86.5C212 95.0604 205.06 102 196.5 102C187.94 102 181 95.0604 181 86.5C181 77.9396 187.94 71 196.5 71C205.06 71 212 77.9396 212 86.5Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M255.5 86.5C255.5 95.0604 248.56 102 240 102C231.44 102 224.5 95.0604 224.5 86.5C224.5 77.9396 231.44 71 240 71C248.56 71 255.5 77.9396 255.5 86.5Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M301.5 86.5C301.5 95.0604 294.56 102 286 102C277.44 102 270.5 95.0604 270.5 86.5C270.5 77.9396 277.44 71 286 71C294.56 71 301.5 77.9396 301.5 86.5Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M301.5 86.5C301.5 95.0604 294.56 102 286 102C277.44 102 270.5 95.0604 270.5 86.5C270.5 77.9396 277.44 71 286 71C294.56 71 301.5 77.9396 301.5 86.5Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M165 86.5C165 95.0604 158.06 102 149.5 102C140.94 102 134 95.0604 134 86.5C134 77.9396 140.94 71 149.5 71C158.06 71 165 77.9396 165 86.5Z"
              stroke="white"
            />
            <motion.path
              {...animationAttributes}
              d="M212 86.5C212 95.0604 205.06 102 196.5 102C187.94 102 181 95.0604 181 86.5C181 77.9396 187.94 71 196.5 71C205.06 71 212 77.9396 212 86.5Z"
              stroke="white"
            />
            <motion.path
              {...animationAttributes}
              d="M255.5 86.5C255.5 95.0604 248.56 102 240 102C231.44 102 224.5 95.0604 224.5 86.5C224.5 77.9396 231.44 71 240 71C248.56 71 255.5 77.9396 255.5 86.5Z"
              stroke="white"
            />
            <motion.path
              {...animationAttributes}
              d="M301.5 86.5C301.5 95.0604 294.56 102 286 102C277.44 102 270.5 95.0604 270.5 86.5C270.5 77.9396 277.44 71 286 71C294.56 71 301.5 77.9396 301.5 86.5Z"
              stroke="white"
            />
            <motion.path
              {...animationAttributes}
              d="M301.5 86.5C301.5 95.0604 294.56 102 286 102C277.44 102 270.5 95.0604 270.5 86.5C270.5 77.9396 277.44 71 286 71C294.56 71 301.5 77.9396 301.5 86.5Z"
              stroke="white"
            />
            <motion.path
              {...animationAttributes}
              d="M353.5 82C353.5 86.1421 350.142 89.5 346 89.5C341.858 89.5 338.5 86.1421 338.5 82C338.5 77.8579 341.858 74.5 346 74.5C350.142 74.5 353.5 77.8579 353.5 82ZM386.5 82C386.5 86.1421 383.142 89.5 379 89.5C374.858 89.5 371.5 86.1421 371.5 82C371.5 77.8579 374.858 74.5 379 74.5C383.142 74.5 386.5 77.8579 386.5 82Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M353.5 82C353.5 86.1421 350.142 89.5 346 89.5C341.858 89.5 338.5 86.1421 338.5 82C338.5 77.8579 341.858 74.5 346 74.5C350.142 74.5 353.5 77.8579 353.5 82ZM386.5 82C386.5 86.1421 383.142 89.5 379 89.5C374.858 89.5 371.5 86.1421 371.5 82C371.5 77.8579 374.858 74.5 379 74.5C383.142 74.5 386.5 77.8579 386.5 82Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M353.5 82C353.5 86.1421 350.142 89.5 346 89.5C341.858 89.5 338.5 86.1421 338.5 82C338.5 77.8579 341.858 74.5 346 74.5C350.142 74.5 353.5 77.8579 353.5 82ZM386.5 82C386.5 86.1421 383.142 89.5 379 89.5C374.858 89.5 371.5 86.1421 371.5 82C371.5 77.8579 374.858 74.5 379 74.5C383.142 74.5 386.5 77.8579 386.5 82Z"
              fill="white"
            />
            <motion.path
              {...animationAttributes}
              d="M353.5 82C353.5 86.1421 350.142 89.5 346 89.5C341.858 89.5 338.5 86.1421 338.5 82C338.5 77.8579 341.858 74.5 346 74.5C350.142 74.5 353.5 77.8579 353.5 82ZM386.5 82C386.5 86.1421 383.142 89.5 379 89.5C374.858 89.5 371.5 86.1421 371.5 82C371.5 77.8579 374.858 74.5 379 74.5C383.142 74.5 386.5 77.8579 386.5 82Z"
              stroke="white"
            />
          </svg>
        </SvgIcon>
        <Typography
          {...typographyAttributes}
          sx={{ position: "relative", left: "-20px", paddingInline: "25px" }}
        >
          Amplifiers
        </Typography>
      </IconButton>
    </Grid2>
  );
};

export default AmplifiersCategory;
