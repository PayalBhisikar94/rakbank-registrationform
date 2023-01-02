import { types } from "./type";

let initialState = {
    theme_Toogle: true
};
export const themeSwitcher = (state = initialState, action) => {
    switch (action.type) {
        case types.TOOGLE_THEME:
            return {
                theme_Toogle: !state.theme_Toogle,
            };
        default: {
            return state;
        }
    }
};
