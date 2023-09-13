import { AppDispatch, RootState } from '../redux'
import { type TypedUseSelectorHook } from 'react-redux'
import {
    useDispatch as OriginUseDispatch,
    useSelector as OriginUseSelector,
} from 'react-redux'

export const useAppDispatch: () => AppDispatch = OriginUseDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = OriginUseSelector

export const useDispatch = useAppDispatch
export const useSelector = useAppSelector
