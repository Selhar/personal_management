export const themes: ITheme = {
  defaults: {
    sizes: {
      border: "1px",
      borderSize: "1px",
      padding: "1px",
    },
  },
  dark: {
    name: "dark",
    colors: {
      text: "red",
      background: "27323a",
    },
  },
  light: {
    name: "light",
    colors: {
      text: "blue",
    },
  },
};

type TGenericProperties = {
  [key: string]: string;
};
export interface ITheme {
  [key: string]: {
    name?: string;
    sizes?: TGenericProperties;
    colors?: TGenericProperties;
  };
}
