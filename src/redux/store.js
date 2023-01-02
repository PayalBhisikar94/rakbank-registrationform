import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./users/reducers";
import { themeSwitcher } from "./themeSwitching/reducers";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
    users: authReducer,
    themeLightToDark: themeSwitcher,
});

const sagaMiddleware = createSagaMiddleware();

let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware, thunk)
    );
} else {
    enhancer = compose(applyMiddleware(sagaMiddleware, thunk));
}

export const store = createStore(
    rootReducer,
    enhancer
);