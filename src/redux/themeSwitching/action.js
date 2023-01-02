import { types } from "./type";

export function themeSwitchAction(themeChange) {
  return {
    type: types.TOOGLE_THEME,
    payload: themeChange,
  };
}
