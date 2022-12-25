
  declare module '@mui/material/styles' {
    interface Theme {
    //   status: {
    //     danger: React.CSSProperties['color'];
    //   };
    }

  
    interface Palette {
    //   neutral: Palette['primary'];
        complementary: Palette['primary']
    }
    interface PaletteOptions {
    //   neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      onHoverDark?: string;
      onHoverLight?: string;
      background?: string,
    //   darker?: string;
    }
    interface SimplePaletteColorOptions {
      onHover?: string,
    //   darker?: string;
    }
  
  }
  
  export {}