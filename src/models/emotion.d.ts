import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      mode: string,
      
      primary: {
        main: string;
        light: string;
      };
      secondary: {
        main: string;
      };
      neutral: {
        main: string;
      };
      background: {
        default: string;
        alt: string;
      };
    };
    typography: {
      fontFamily: string[];
      fontSize: number;
      h1: {
        fontFamily: string[];
        fontSize: number;
      };
      h2: {
        fontFamily: string[];
        fontSize: number;
      };
      h3: {
        fontFamily: string[];
        fontSize: number;
      };
      h4: {
        fontFamily: string[];
        fontSize: number;
      };
      h5: {
        fontFamily: string[];
        fontSize: number;
      };
      h6: {
        fontFamily: string[];
        fontSize: number;
      };
    };
  }
}
