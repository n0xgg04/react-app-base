import { combineReducers, configureStore } from '@reduxjs/toolkit'
import exampleReducer from './reducers/example.ts'

const allReducers = combineReducers({
    example: exampleReducer,
})

const store = configureStore({
    reducer: allReducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
