import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export class ComponentObject {
  bounds: Bound;

  constructor(bounds: Bound) {
    this.bounds = bounds;
  }

  getGridBounds(canvasWidth: number): Bound {
    const y = this.bounds.y;
    const height = this.bounds.height;

    const colWidth = Math.round(canvasWidth / 12);

    const width = Math.round(this.bounds.width / colWidth) * colWidth;
    const x = Math.round(this.bounds.x / colWidth) * colWidth;

    return { x: x, y: y, width: width, height: height };
  }
}

export type Bound = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Params = {
  text: string;
  color: string;
};

export type ComponentStruct = {
  uid: string;
  type: string;
  bounds: Bound;
  params: { [key: string]: string };
  children: string[];
};

export interface ComponentState {
  selectedUID: string;
  components: ComponentStruct[];
}

const initialState: ComponentState = {
  selectedUID: "",
  components: [],
};

export const componentModel = createSlice({
  name: "component",
  initialState: initialState,
  reducers: {
    addComponent: (
      state: ComponentState,
      action: PayloadAction<{
        component: ComponentStruct;
      }>
    ) => {
      state.components.push(action.payload.component);
    },
    select: (
      state: ComponentState,
      action: PayloadAction<{
        uid: string;
      }>
    ) => {
      state.selectedUID = action.payload.uid;
    },
    transform: (
      state: ComponentState,
      action: PayloadAction<{
        uid: string;
        bounds: Bound;
      }>
    ) => {
      const index = state.components.findIndex(
        (element) => element.uid === action.payload.uid
      );
      state.components[index].bounds = action.payload.bounds;
    },
  },
});

export const { addComponent, transform, select } = componentModel.actions;

export const getComponents = (state: RootState) =>
  state.canvas.present.component.components;

export const getSelectedUID = (state: RootState) =>
  state.canvas.present.component.selectedUID;

export const getSelected = (state: RootState) =>
  state.canvas.present.component.components.find(
    (element) => element.uid === state.canvas.present.component.selectedUID
  );
export const componentReducer = componentModel.reducer;
