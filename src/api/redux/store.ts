
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import useListRepo from "./useListRepo/reducer";

const rootReducer = combineReducers({ useListRepo });

const store = configureStore({
  reducer: rootReducer,
  //   reducer: {
  //     listRepo: useListRepo,
  //   },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
// import { combineReducers, createStore } from "redux";

// import useListRepo from "./useListRepo/reducer";

// const rootReducer = combineReducers({ useListRepo });
// const store = createStore(rootReducer);

// export default store;
