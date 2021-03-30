import { UIActionCreatorType } from "store/actions";
import { HIDE_MENU, SHOW_MENU } from "store/actions/types";

export type MenuStateType = {
  isVisible: boolean;
};

export type UiInitialStateType = {
  menu: MenuStateType;
};

export const uiInitialState: UiInitialStateType = {
  menu: {
    isVisible: false,
  },
};

export const uiReducer = (
  state: UiInitialStateType = uiInitialState,
  action: UIActionCreatorType
): UiInitialStateType => {
  switch (action.type) {
    case HIDE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isVisible: false,
        },
      };
    case SHOW_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isVisible: true,
        },
      };
    default:
      return state;
  }
};
