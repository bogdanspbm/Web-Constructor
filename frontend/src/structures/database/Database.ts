import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type DatabaseConnection = {
    ip: string
    port: string
    user: string
    password: string
    database: string
}

export interface DatabaseState {
    config: DatabaseConnection
    status: boolean
}

const initialState: DatabaseState = {
    config: {ip: "localhost", port: "5432", user: "postgres", password: "postgrespw", database: "postgres"},
    status: false
}

export const databaseModel = createSlice({
    name: 'database',
    initialState: initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setStatus: (state: DatabaseState, action: PayloadAction<{
                        status: boolean
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
    }
})

export const {
    setPort, setUser, setStatus, setPassword, setIP
} = databaseModel.actions;

export const databaseReducer = databaseModel.reducer;