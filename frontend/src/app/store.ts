import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import undoable from "redux-undo";
import { databaseReducer } from "../structures/database/Database";
import { componentReducer } from "../structures/component/Component";
import { canvasReducer } from "../structures/canvas/Canvas";

export const store = configureStore({
  reducer: {
    canvas: undoable(
      combineReducers({
        database: databaseReducer,
        component: componentReducer,
        canvas: canvasReducer,
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
