import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      mode: string;
      primary: any;
      secondary: any;
      neutral: any;
      background: any;
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
