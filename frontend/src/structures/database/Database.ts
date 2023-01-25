import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export type DatabaseConnection = {
    ip: string
    port: string
    user: string
    password: string
    database: string
}

export interface DatabaseState {
    config: DatabaseConnection
    status: string
    schemas: string[]
}

const initialState: DatabaseState = {
    config: {ip: "localhost", port: "5432", user: "postgres", password: "postgrespw", database: "postgres"},
    status: "empty",
    schemas: []
}

export const databaseModel = createSlice({
    name: 'database',
    initialState: initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setStatus: (state: DatabaseState, action: PayloadAction<{
                        status: string
                    }>
        ) => {
            state.status = action.payload.status
        },
        setIP: (state: DatabaseState, action: PayloadAction<{
                    ip: string
                }>
        ) => {
            state.config.ip = action.payload.ip
        }, setPort: (state: DatabaseState, action: PayloadAction<{
                         port: string
                     }>
        ) => {
            state.config.port = action.payload.port
        }, setUser: (state: DatabaseState, action: PayloadAction<{
                         user: string
                     }>
        ) => {
            state.config.user = action.payload.user
        }, setPassword: (state: DatabaseState, action: PayloadAction<{
                             password: string
                         }>
        ) => {
            state.config.password = action.payload.password
        },
        setSchemas: (state: DatabaseState, action: PayloadAction<{
                         schemas: string[]
                     }>
        ) => {
            state.schemas = action.payload.schemas
        },
    }
})

export const {
    setPort, setUser, setStatus, setPassword, setIP, setSchemas
} = databaseModel.actions;

export const getDatabaseConfig = (state: RootState) =>
    state.canvas.present.database.config

export const getDatabaseStatus = (state: RootState) =>
    state.canvas.present.database.status

export const getDatabaseSchemas = (state: RootState) =>
    state.canvas.present.database.schemas
export const databaseReducer = databaseModel.reducer;