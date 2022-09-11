import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import {
  ACCENT_DARK,
  ACCENT_LIGHT,
  BG_DARK,
  BG_LIGHT,
  FG_DARK,
  FG_LIGHT,
} from "./config";

const fromTwColor = () => {
  return {
    bgLight: convertColors(BG_LIGHT),
    bgDark: convertColors(BG_DARK),
    fgLight: convertColors(FG_LIGHT),
    fgDark: convertColors(FG_DARK),
    accentLight: convertColors(ACCENT_LIGHT),
    accentDark: convertColors(ACCENT_DARK),
  };
};

const convertColors = (currentColor: string) => {
  const twConfig = resolveConfig(tailwindConfig);
  const color = currentColor.split("-")[0];
  let twColor = twConfig.theme.colors[color];

  if (currentColor.split("-").length === 2) {
    twColor = twConfig.theme.colors[color][currentColor.split("-")[1]];
  }

  return twColor;
};

export default fromTwColor;
