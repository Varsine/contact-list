import {
	ADD_CONTACT,
	CHANGE_POPUP_STATUS,
	ADD_MESSAGE,
	CHANGE_COMPLETED,
	DELETE_DATA_ITEM,
	SELECT_ALL_ITEM,
	SEARCH_DATA,
} from '../reducer/contactReducer'

export const addContact = (data, newData) => {
	const allData = [ ...data, newData ]
	return {
		type: ADD_CONTACT,
		payload: allData
	}
}

export const searchData = (newData)=>{
	return{
		type: SEARCH_DATA,
		payload: newData
	}
}

export const changePopupStatus = (popupStatus) => {
	return {
		type: CHANGE_POPUP_STATUS,
		payload: !popupStatus
	}
}

export const sendMessdge = (id, msg) => {
	return {
		type: ADD_MESSAGE,
		payload: { id, value: msg }
	}
}

export const changeCompleted = (id) => {
	return {
		type: CHANGE_COMPLETED,
		payload: id
	}
}

export const deleteItem = () => {
	return {
		type: DELETE_DATA_ITEM
	}
}

export const selectAllItem = () => {
	return {
		type: SELECT_ALL_ITEM,
	}
}
