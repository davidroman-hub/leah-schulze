import { FluxStandardAction } from "flux-standard-action";

export const SET_HOME = "SET_HOME";

export const setHome = (set: boolean): FluxStandardAction<string, boolean> => ({
  type: SET_HOME,
  payload: set,
});
