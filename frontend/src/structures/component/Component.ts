import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

export type Component = {
  uid: string;
  type: string;
  bounds: Bound;
  params: Params;
  children: string[];
};

export interface ComponentState {
  components: Component[];
}

const initialState: ComponentState = {
  components: [],
};

export const componentModel = createSlice({
  name: "component",
  initialState: initialState,
  reducers: {
    addComponent: (
      state: ComponentState,
      action: PayloadAction<{
        component: Component;
      }>
    ) => {
      state.components.push(action.payload.component);
    },
  },
});

export const { addComponent } = componentModel.actions;

export const getComponents = (state: RootState) =>
  state.canvas.present.component.components;
export const componentReducer = componentModel.reducer;
