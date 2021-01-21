import { initialState } from '../../utils/Index'
export const ADD_CONTACT = 'ADD_CONTACT'
export const CHANGE_POPUP_STATUS = 'CHANGE_POPUP_STATUS'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED'
export const DELETE_DATA_ITEM = 'DELETE_DATA_ITEM'
export const SELECT_ALL_ITEM = 'SELECT_ALL_ITEM'
export const SEARCH_DATA = 'SEARCH_DATA'

const contactReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CONTACT:
			return {
				...state,
				data: payload,
    			isChecked: false,

			}
		case CHANGE_POPUP_STATUS:
			return {
				...state,
				isOpenPopup: payload
			}
		case ADD_MESSAGE:
			const changeDataItem = state.data.map((el, idx) => {
				if (idx === payload.id) {
					return { ...el, messages: [ ...el.messages, payload.value ] }
				}
				return el
			})
			return {
				...state,
				data: changeDataItem
			}
		case SEARCH_DATA:
			return{
				...state,
				currentData: payload
			}
		case CHANGE_COMPLETED:
			const changeItemCompleted = state.data.map((el) => {
				if (el.id === payload) {
					return { ...el, completed: !el.completed }
				}
				return el
			})
			return {
				...state,
				data: changeItemCompleted
			}
		case DELETE_DATA_ITEM:
			const deleteItem = state.data.filter((el) => el.completed === false)
			return {
				...state,
				data: deleteItem
			}
		case SELECT_ALL_ITEM:
			const changeCompleted = state.data.map((el) => {
					return { ...el, completed: true }
			})
			return {
				...state,
				isChecked: true,
				data: changeCompleted 
			}
		default:
			return state
	}
}

export default contactReducer
