import { Theme, useTheme } from "@mui/material";
import { StyleProps } from "src/interface/theme";


type MakeStylesCallback<Params, StylesObject> = (
  theme: Theme,
  params: Params
) => Record<keyof StylesObject, StyleProps>;

export const makeThemedStyles = <Params = void>() => {
  return <StylesObject>(makeThemedStyles: MakeStylesCallback<Params, StylesObject>) => {
    return (
      params: Params
    ): { styles: ReturnType<MakeStylesCallback<Params, StylesObject>>; theme: Theme } => {
      const theme = useTheme();
      const styles = makeThemedStyles(theme, params);

      return { styles, theme };
    };
  };
};