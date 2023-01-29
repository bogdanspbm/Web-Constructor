import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Bound } from "../component/Component";

export interface CanvasState {
  size: {
    width: number;
    height: number;
  };
  isTransforming: boolean;
  transformBound: Bound;
  overlapKeys: number[];
}

const initialState: CanvasState = {
  size: {
    width: 800,
    height: 600,
  },
  isTransforming: false,
  overlapKeys: [],
  transformBound: { x: 0, y: 0, width: 100, height: 100 },
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
    setTransformBound: (
      state: CanvasState,
      action: PayloadAction<{
        bounds: Bound;
      }>
    ) => {
      state.transformBound = action.payload.bounds;
    },
    setOverlapKeys: (
      state: CanvasState,
      action: PayloadAction<{
        keys: number[];
      }>
    ) => {
      state.overlapKeys = action.payload.keys;
    },
    setIsTransform: (
      state: CanvasState,
      action: PayloadAction<{
        isTransforming: boolean;
      }>
    ) => {
      state.isTransforming = action.payload.isTransforming;
    },
  },
});

export const getCanvasSize = (state: RootState) =>
  state.canvas.present.canvas.size;

export const getIsTransforming = (state: RootState) =>
  state.canvas.present.canvas.isTransforming;

export const getTransformingBounds = (state: RootState) =>
  state.canvas.present.canvas.transformBound;

export const getOverlapKeys = (state: RootState) =>
  state.canvas.present.canvas.overlapKeys;
export const { setSize, setTransformBound, setIsTransform, setOverlapKeys } =
  canvasModel.actions;

export const canvasReducer = canvasModel.reducer;
