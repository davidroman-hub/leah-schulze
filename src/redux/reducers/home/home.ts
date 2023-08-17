/**
 * @author David Roman <david@inarix.com>
 * @file Description
 * @desc Created on 2020-11-16 10:45:38 am
 * @copyright Inarix
 */
import { FluxStandardAction } from "flux-standard-action";
import { SET_HOME } from "../../actions/home/home";
import { SET_MODAL_PROJECT, SET_PROJECT_INFO } from "../../actions/projects/projects";

export interface HomeState {
  home: boolean;
  isProjectActive: boolean;
  projectInfo: any;
}

const initialState: HomeState = {
  home: false,
  isProjectActive: false,
  projectInfo: {},
};

export const HomeReducer = (
  state = initialState,
  action: FluxStandardAction<string, any>
): HomeState => {
  switch (action.type) {
    // case SET_HOME:
    //   return initialState;
    case SET_MODAL_PROJECT:
      return { ...state, isProjectActive: action.payload };
    case SET_PROJECT_INFO:
      return { ...state, projectInfo: action.payload };
    case SET_HOME:
      return { ...state, home: action.payload };
    default:
      return state;
  }
};
