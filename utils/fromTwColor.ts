import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
import { BG_DARK, BG_LIGHT, FG_DARK, FG_LIGHT } from "./config";

const fromTwColor = () => {
  // Background colors
  const twConfig = resolveConfig(tailwindConfig);
  const color = BG_LIGHT.split("-")[0];
  const secondaryColor = BG_DARK.split("-")[0];
  let twColor = twConfig.theme.colors[color];
  let twSecondaryColor = twConfig.theme.colors[secondaryColor];
  if (BG_LIGHT.split("-").length === 2) {
    twColor = twConfig.theme.colors[color][BG_LIGHT.split("-")[1]];
  }
  if (BG_DARK.split("-").length === 2) {
    twSecondaryColor =
      twConfig.theme.colors[secondaryColor][BG_DARK.split("-")[1]];
  }

  // Foreground colors
  const colorFg = FG_LIGHT.split("-")[0];
  const secondaryColorFg = FG_DARK.split("-")[0];
  let twColorFg = twConfig.theme.colors[colorFg];
  let twSecondaryColorFg = twConfig.theme.colors[secondaryColorFg];

  if (FG_LIGHT.split("-").length === 2) {
    twColorFg = twConfig.theme.colors[colorFg][FG_LIGHT.split("-")[1]];
  }
  if (FG_DARK.split("-").length === 2) {
    twSecondaryColorFg =
      twConfig.theme.colors[secondaryColorFg][FG_DARK.split("-")[1]];
  }

  return {
    bgLight: twColor,
    bgDark: twSecondaryColor,
    fgLight: twColorFg,
    fgDark: twSecondaryColorFg,
  };
};

export default fromTwColor;
