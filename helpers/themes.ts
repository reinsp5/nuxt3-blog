import { ThemeDefinition } from "vuetify";

// メインテーマ
export const MAIN_THEME = "mainTheme";

export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

// ダークテーマ
export const DARK_THEME = "darkTheme";

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#2196F3",
    secondary: "#424242",
    accent: "#FF4081",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};