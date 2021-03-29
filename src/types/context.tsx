export type GeneralAction = string;

export type GeneralActionCreator = {
    type: GeneralAction;
    payload?: {[key: string]: any}
};

export type GeneralSelector = (state: any) => any;