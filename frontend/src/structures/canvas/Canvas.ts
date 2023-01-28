import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CanvasState {
  size: {
    width: number;
    height: number;
  };
}

const initialState: CanvasState = {
  size: {
    width: 800,
    height: 600,
  },
};

export const canvasModel = createSlice({
  name: "canvas",
  initialState: initialState,
  reducers: {
    setSize: (
      state: CanvasState,
      action: PayloadAction<{
        width: number;
        height: number;
      }>
    ) => {
      state.size.width = action.payload.width;
      state.size.height = action.payload.height;
    },
  },
});

export const getCanvasSize = (state: RootState) =>
  state.canvas.present.canvas.size;
export const { setSize } = canvasModel.actions;
export const canvasReducer = canvasModel.reducer;
