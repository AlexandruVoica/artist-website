import { HIDE_MENU, SHOW_MENU } from "./types";

// TODO: add custom type
export type HideMenuActionType = {
  type: string;
};

export type ShowMenuActionType = {
  type: string;
};

export const hideMenu: HideMenuActionType = { type: HIDE_MENU };
export const showMenu: ShowMenuActionType = { type: SHOW_MENU };

export type UIActionCreatorType = HideMenuActionType | ShowMenuActionType;
