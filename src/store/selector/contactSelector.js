import { createSelector } from 'reselect'

export const selectState = (state) => state.contactReducer

export const data = createSelector(selectState, (state=>state.data))

export const popupStatus = createSelector(selectState, (state=>state.isOpenPopup))

export const currentData = createSelector(selectState, (state=>state.currentData))

export const isCkecked = createSelector(selectState, (state=>state.isChecked))