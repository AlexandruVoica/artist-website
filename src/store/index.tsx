import React, {createContext, useContext, useReducer} from "react";
import {uiInitialState, UiInitialStateType, uiReducer} from "./reducers";
import useCombinedReducers from "../utils/combineReducers";
import {GeneralSelector} from "../types/context";

export type AppInitialStateType = {
    ui: UiInitialStateType;
}

export const appInitialState: AppInitialStateType = {
  ui: uiInitialState
};

const StateContext = createContext(appInitialState);
const DispatchContext = createContext(undefined);

export const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    const emptyDispatch = (action: any) => {};
    return dispatch || emptyDispatch;
};

export const useState = () => {
    const state = useContext(StateContext);
    const emptyState = {};
    return state || emptyState;
};

export const useSelector = (selector: GeneralSelector) => {
    const state = useState();
    return selector(state);
};

export const CompositeProvider = (props: any) => {
    const [state, dispatch]: any = useCombinedReducers({
        ui: useReducer(uiReducer, uiInitialState),
    });

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};