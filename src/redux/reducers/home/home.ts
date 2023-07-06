/**
 * @author David Roman <david@inarix.com>
 * @file Description
 * @desc Created on 2020-11-16 10:45:38 am
 * @copyright Inarix
 */
import { FluxStandardAction } from "flux-standard-action";
import { SET_HOME } from "../../actions/home/home";

export interface HomeState {
  home: boolean;
}

const initialState: HomeState = {
  home: false,
};

export const HomeReducer = (
  state = initialState,
  action: FluxStandardAction<string, any>
): HomeState => {
  switch (action.type) {
    // case SET_HOME:
    //   return initialState;
    case SET_HOME:
      return { ...state, home: action.payload };
    default:
      return state;
  }
};
