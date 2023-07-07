/**
 * @author David Roman <david@inarix.com>
 * @file Translation Reducer
 * @desc Created on 2020-12-22 4:21:54 pm
 * @copyright Inarix
 */

export interface TranslationState {

  setTranslation: {
    Eng: string;
    De: string;
  };
}

const initialState = {
  setTranslation: {
    Eng: "en",
    De: "de",
  },
};

export const translation = (state = initialState): TranslationState => {
  switch (state) {
    default:
      return initialState;
  }
};
