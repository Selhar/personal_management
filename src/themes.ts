export const themes: ITheme = {
  defaults: {
    spaces: {
      tiny: "5px",
      small: "10px",
      medium: "15px",
      large: "20px",
      shadow: "2px 2px 2.5px"
    },
    font: {
      weightBold: "800",
    },
    misc: {
      radius: "2px",
    },
  },
  dark: {
    name: "dark",
    colors: {
      text: "white",
      shadow: "rgba(135, 10, 127)",
      background: "#12052b",
      backgroundContrast: "#460545",
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
    spaces?: TGenericProperties;
    colors?: TGenericProperties;
    font?: TGenericProperties;
    misc?: TGenericProperties;
  };
}
