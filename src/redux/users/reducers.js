import RegistrationForm from "../../component/registrationForm";
import { types } from "./type";

let initialState = {};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state,
                users: action.payload,
                RegistrSuccess: true
            };
        default: {
            return state;
        }
    }
};
