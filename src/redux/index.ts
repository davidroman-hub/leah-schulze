
/**
 * @author David Roman <david@inarix.com>
 * @file Description
 * @desc Created on 2020-12-21 7:36:07 pm
 * @copyright Inarix
 */
import { combineReducers } from 'redux';

// Reducers
/**
 * Authentication
 */
import {
  HomeState,
  HomeReducer as Home,
} from '../redux/reducers/home/home';



/**
 * Translations
 */

// import {
//   TranslationState,
//   translation as GeneralTranslation,
// } from '../reducers/translations/translation';

export interface State {
  Home: HomeState;
  //GeneralTranslation: TranslationState;
}

const rootReducer = combineReducers({
  Home,
 // GeneralTranslation,
});

export default rootReducer;
