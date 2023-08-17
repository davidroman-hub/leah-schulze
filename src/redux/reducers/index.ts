/**
 * @author David Roman <david@inarix.com>
 * @file Description
 * @desc Created on 2020-12-21 7:36:07 pm
 * @copyright Inarix
 */
import { combineReducers } from "redux";

// Reducers
/**
 * Authentication
 */
import { HomeState, HomeReducer as Home } from "./home/home";

import {
  TranslationState,
  translation as GeneralTranslation,
} from "./locale/locale";

import {
  ProjectState,
  ProjectsReducer as projects,
} from "./projects/projects";

export interface State {
  Home: HomeState;
  Projects: ProjectState;
  Locale: TranslationState;
}

const rootReducer = combineReducers({
  Home,
  projects,
  GeneralTranslation,
});

export default rootReducer;
