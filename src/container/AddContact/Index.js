import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import selector from '../../store/selector/Index'
import action from '../../store/action/Index'
import { InputField } from '../../component/Index'
import { createId } from '../../utils/Index'
import { ReactComponent as UserIcon } from '../../icons/user.svg'
import { ReactComponent as UserMaleIcon } from '../../icons/male-user.svg'
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg'
import { ReactComponent as EmailIcon } from '../../icons/mail.svg'
import { ReactComponent as WorkPlaceIcon } from '../../icons/work.svg'
import { ReactComponent as PlaceIcon } from '../../icons/place.svg'

import styles from './AddContact.module.scss'

const initialState = {
	nameValue: '',
	onePhone: '',
	twoPhone: '',
	email: '',
	workplace: '',
	address: '',
	erorrPhoneOne: '',
	erorrPhoneTwo: '',
	errorName: '',
	errorEmail: ''
}
const AddContact = () => {
	const data = useSelector(selector.data)
	const popupStatus = useSelector(selector.popupStatus)
	const dispatch = useDispatch()
	const [ state, setState ] = useState(initialState)
	const [ isLodeImg, setIsLodeImg ] = useState(false)
	const [ file, setFile ] = useState(null)

	const {
		nameValue,
		onePhone,
		twoPhone,
		workplace,
		address,
		email,
		errorEmail,
		errorName,
		erorrPhoneOne,
		erorrPhoneTwo
	} = state

	const handleChangeImg = (e) => {
		setFile(URL.createObjectURL(e.target.files[0]))
		setIsLodeImg(!isLodeImg)
	}

	const inputChangeHandler = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const submitHandler = (e) => {
		e.preventDefault()

		const newData = {
			id: createId(),
			img: file,
			name: nameValue,
			completed: false,
			email: email,
			phoneOne: onePhone,
			phoneTwo: twoPhone,
			workplace: workplace,
			address: address,
			messages: [ { phoneNum: 1, text: 'Hello' } ]
		}

		const regexTel = /\d{3}-\d{3}-\d{3}/
		const regextEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		const nameInvalid = nameValue === '' ? 'This field is required*' : ''
		const phoneInvalid =
			onePhone !== '' ? (onePhone.match(regexTel) ? '' : 'This phone is wrong.') : 'This field is required*'
		const phoneTwoInvalid = twoPhone !== '' ? (twoPhone.match(regexTel) ? '' : 'This phone is wrong.') : ''
		const emailInvalid =
			email !== '' ? (email.match(regextEmail) ? '' : 'The email should be like this` sellLogix@gmail.com ') : ''
		setState({
			...state,
			errorName: nameInvalid,
			erorrPhoneOne: phoneInvalid,
			erorrPhoneTwo: phoneTwoInvalid,
			errorEmail: emailInvalid
		})

		if (
			errorName === nameInvalid &&
			erorrPhoneOne === phoneInvalid &&
			erorrPhoneTwo === '' &&
			errorEmail === '' &&
			nameValue !== '' &&
			onePhone !== ''
		) {
			dispatch(action.addContact(data, newData))
			dispatch(action.changePopupStatus(popupStatus))
		}
	}

	return (
		<div className={styles.column}>
			{!isLodeImg ? (
				<UserIcon className={styles.column__img} />
			) : (
				<img className={styles.column__img} src={file} alt='' />
			)}
			<form className={styles.column__list} action='#' onSubmit={submitHandler}>
				<input
					className={styles.column__list__file_input}
					id='imageUpload'
					type='file'
					name='profile_photo'
					onChange={handleChangeImg}
					placeholder='Photo'
					required=''
					capture
				/>
				<InputField
					type='text'
					name='nameValue'
					value={nameValue}
					placeholder='Name'
					onChange={inputChangeHandler}
					icon={<UserMaleIcon className={styles.column__list__icon} />}
				/>
				<p className={styles.column__list__error}>{errorName}</p>
				<InputField
					type='tel'
					name='onePhone'
					value={onePhone}
					placeholder='123-500-500'
					onChange={inputChangeHandler}
					icon={<PhoneIcon className={styles.column__list__icon} />}
				/>
				<p className={styles.column__list__error}>{erorrPhoneOne}</p>
				<InputField
					type='tel'
					name='twoPhone'
					value={twoPhone}
					placeholder='123-500-500'
					onChange={inputChangeHandler}
					icon={<PhoneIcon className={styles.column__list__icon} />}
				/>
				<p className={styles.column__list__error}>{erorrPhoneTwo}</p>
				<InputField
					type='text'
					name='email'
					value={email}
					placeholder='Email'
					onChange={inputChangeHandler}
					icon={<EmailIcon className={styles.column__list__icon} />}
				/>
				<p className={styles.column__list__error}>{errorEmail}</p>

				<InputField
					type='text'
					name='workplace'
					value={workplace}
					placeholder='Work place'
					onChange={inputChangeHandler}
					icon={<WorkPlaceIcon className={styles.column__list__icon} />}
				/>
				<InputField
					type='text'
					name='address'
					value={address}
					placeholder='Address'
					onChange={inputChangeHandler}
					icon={<PlaceIcon className={styles.column__list__icon} />}
				/>
				<div className={styles.column__list__btn_parent}>
					<button className={styles.column__list__btn_parent__child}>Add</button>
				</div>
			</form>
		</div>
	)
}

export default AddContact
