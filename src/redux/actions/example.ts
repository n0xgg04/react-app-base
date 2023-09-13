import { createAction } from '@reduxjs/toolkit'
import { UserData } from '../../@types/UserData'

export const SET_USER_DATA = createAction<UserData>('SET_USER_DATA')
