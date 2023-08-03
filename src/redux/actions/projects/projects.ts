import { FluxStandardAction } from "flux-standard-action";

export const SET_MODAL_PROJECT = "SET_MODAL_PROJECT";
export const SET_PROJECT_INFO = "SET_PROJECT_INFO";
export const RESET_PROJECT_STATE = "RESET_PROJECT_STATE";

export const setModalProject = (
  set: boolean
): FluxStandardAction<string, boolean> => ({
  type: SET_MODAL_PROJECT,
  payload: set,
});

export const setInfoProject = (set: any): FluxStandardAction<string, any> => ({
  type: SET_PROJECT_INFO,
  payload: set,
});
