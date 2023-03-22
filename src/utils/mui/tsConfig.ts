declare module "@mui/material/styles" {
  interface Theme {
    //   status: {
    //     danger: React.CSSProperties['color'];
    //   };
  }

  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    semiSm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    //   neutral: Palette['primary'];
    complementary: Palette["primary"];
  }
  interface PaletteOptions {
    //   neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    onHoverDark?: string;
    onHoverLight?: string;
    background?: string;
    alert?: string;
    grayedOutText?: string;
    //   darker?: string;
  }
  interface SimplePaletteColorOptions {
    onHover?: string;
    //   darker?: string;
  }
}

export {};
