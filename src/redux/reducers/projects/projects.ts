import { FluxStandardAction } from "flux-standard-action";
import {
  SET_MODAL_PROJECT,
  SET_PROJECT_INFO,
} from "../../actions/projects/projects";

export interface ProjectState {
  isProjectActive: boolean;
  projectInfo: any;
}

const initialState: ProjectState = {
  isProjectActive: false,
  projectInfo: {},
};

export const ProjectsReducer = (
  state = initialState,
  action: FluxStandardAction<string, any>
): ProjectState => {
  switch (action.type) {
    case SET_MODAL_PROJECT:
      return { ...state, isProjectActive: action.payload };
    case SET_PROJECT_INFO:
      return { ...state, projectInfo: action.payload };
    //   return initialState;
    // case SET_HOME:
    //   return { ...state, home: action.payload };
    default:
      return state;
  }
};
