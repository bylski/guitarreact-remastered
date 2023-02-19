import { SvgIcon, SxProps } from "@mui/material";
import { motion } from "framer-motion";

const AccessoriesSvgIcon: React.FC<{
  sx: SxProps;
  fill: string;
  additionalAttributes?: Object;
}> = (props) => {
  const additionalAttributes = props.additionalAttributes
    ? props.additionalAttributes
    : {};

  return (
    <SvgIcon sx={props.sx}>
      <svg viewBox="0 0 431 513" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          {...additionalAttributes}
          d="M21 95L15 110.5L13 124.5L12 135.5L13 150.5L17 171.5L21.5 188.5L29.5 216L42.5 255.5L53.5 283L66 312L83 349L98.5 376.5L108 394.5L120 415L136.5 439L154.5 460L165.5 471.5L176.5 483L189 491.5L199.5 497.5L210.5 501.5H217L226 499.5L233.5 496.5L244 491L256 483L270.5 469.5L282.5 455.5L294 439L311.5 415L324.5 394.5L371 306.5L399.5 228.5L412 181.5L417 154L419 134L417 115.5L412 95L402.156 77.6741C400.39 74.567 398.297 71.6581 395.911 68.9973L386.5 58.5L371 46.5L355.5 37.5L324.5 24.5L296.5 18L263 12.5L223 11H200.5L173.5 12.5L152 15L132 18L106.5 24.5L74.5 37.5L59.5 46.5L46.5 58.5L34.5 73L26.5 84L21 95Z"
          stroke={props.fill}
          strokeWidth="22"
        />
        <motion.path
          {...additionalAttributes}
          d="M162.5 43L137.5 46.5L118 51.5L102.5 57.5L86 66L73 74.5L63 85L56 95.5L49.5 112L46.5 124L45 133.5V146L46.5 156L49.5 174L56 202.5L63 224.5L73 252L84 278C87.6667 285.5 95.1 300.7 95.5 301.5C95.9 302.3 102.333 316.167 105.5 323L116.5 343.5L137.5 379.5L152 402.5L163 420L173 436.5"
          stroke={props.fill}
          strokeWidth="22"
          strokeLinecap="round"
        />
        <motion.circle
          {...additionalAttributes}
          cx="215.5"
          cy="192.5"
          r="69.5"
          stroke={props.fill}
          strokeWidth="22"
        />
        <motion.path
          {...additionalAttributes}
          d="M268.5 95L198 176C198 176 183 191.5 185.5 191.5C188 191.5 211 191.5 211 191.5C211 191.5 242 191.5 245 191.5C248 191.5 161.5 289 161.5 289"
          stroke={props.fill}
          strokeWidth="22"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default AccessoriesSvgIcon;
