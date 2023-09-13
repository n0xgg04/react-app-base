import { createReducer } from '@reduxjs/toolkit'
import { SET_USER_DATA } from '../actions/example'
import { type UserData } from '../../@types/UserData'

const initialState: UserData = {
    user_id: '',
    username: '',
    email: '',
    fullname: '',
    gender: 'male',
    avatar: '',
    created_at: '',
    updated_at: '',
}

const exampleReducer = createReducer<UserData>(initialState, (builder) => {
    builder.addCase(SET_USER_DATA, (state, action) => {
        Object.assign(state, action.payload)
    })
})

export default exampleReducer
