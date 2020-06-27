import React from "react";
import { BLUE, GREEN, WHITE, BLACK, RED_PURPLE } from "./colors";

type Color = {
  [key: string]: {
    light: string;
    dark: string;
  };
};
// type Toggle ={[key:string]:{
//     light:boolean;
//     dark:boolean;
// }}
export interface Palette {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  surface: string;
  onSurface: string;
  background: string;
  onBackground: string;
  disabled: string;
  onDisabled: string;
  shadow: string;
  onBackground80: string;
  onBackground60: string;
  onBackground40: string;
  onBackground20: string;
  transparent: string;
  header: string;
  onHeader: string;
}
// interface Palettes {
//     primary: Color;
//     onPrimary: Color;
//     secondary: Color;
//     onSecondary: Color;
//     surface: Color;
//     onSurface: Color;
//     background: Color;
//     onBackground: Color;
//     disabled: Color;
//     onDisabled: Color;
//     shadow: Color;
//     onBackground80: Color;
//     onBackground60: Color;
//     onBackground40: Color;
//     onBackground20: Color;
//     transparent: Color;
//     header: Color;
//     onHeader: Color;
//   }

export const defaultPalette = {
  primary: BLUE,
  onPrimary: WHITE,
  secondary: GREEN,
  onSecondary: WHITE,
  surface: WHITE,
  onSurface: BLACK,
  background: WHITE,
  onBackground: BLACK,
  disabled: RED_PURPLE,
  onDisabled: WHITE,
  shadow: BLACK,
  onBackground80: BLACK,
  onBackground60: BLACK,
  onBackground40: WHITE,
  onBackground20: WHITE,
  transparent: WHITE,
  header: GREEN,
  onHeader: WHITE,
};

const palettes: Color = {
  primary: { light: BLUE, dark: WHITE },
  onPrimary: { light: WHITE, dark: WHITE },
  secondary: { light: GREEN, dark: GREEN },
  onSecondary: { light: WHITE, dark: WHITE },
  surface: { light: WHITE, dark: BLACK },
  onSurface: { light: BLACK, dark: WHITE },
  background: { light: WHITE, dark: BLACK },
  onBackground: { light: BLACK, dark: WHITE },
  disabled: { light: WHITE, dark: BLACK },
  onDisabled: { light: WHITE, dark: WHITE },
  shadow: { light: WHITE, dark: BLACK },
  onBackground80: { light: BLACK, dark: WHITE },
  onBackground60: { light: WHITE, dark: WHITE },
  onBackground40: { light: WHITE, dark: WHITE },
  onBackground20: { light: WHITE, dark: BLACK },
  transparent: { light: WHITE, dark: BLACK },
  header: { light: GREEN, dark: BLACK },
  onHeader: { light: WHITE, dark: WHITE },
};
export const theme = (mode: string): { palette: Palette } => {
  let currentPalette = defaultPalette;

  for (let key in palettes) {
    currentPalette[key] = palettes[key][mode];
  }
  return { palette: currentPalette };
};

const ThemeContext = React.createContext({ palette: defaultPalette });

export default ThemeContext;
