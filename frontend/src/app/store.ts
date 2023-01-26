import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import undoable from "redux-undo";
import { databaseReducer } from "../structures/database/Database";
import { componentReducer } from "../structures/component/Component";

export const store = configureStore({
  reducer: {
    canvas: undoable(
      combineReducers({
        database: databaseReducer,
        component: componentReducer,
      })
    ),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
