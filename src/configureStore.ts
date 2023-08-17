/**
 * @author David Roman <david@inarix.com>
 * @file Store Inarix Portal
 * @desc Created on 2020-12-22 2:46:51 pm
 * @copyright Inarix
 */
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, Persistor } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./redux/reducers/index";

export type RootState = ReturnType<typeof rootReducer>;
export interface ConfiguredStore {
  store: Store;
  persistor: Persistor;
}

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

/**
 * Configure and returns store and persistor.
 */
export default (): ConfiguredStore => {
  const store = createStore(
    persistReducer(persistConfig, rootReducer as any),
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
