export interface Theme {
  syntax: string;
  ui: string;
  bg: string;
  btn: string;
}

export interface ThemeContextInterface {
  theme: Theme;
  toggleTheme: any;
}
