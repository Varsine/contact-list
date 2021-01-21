import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

import selector from '../../store/selector/Index'
import action from '../../store/action/Index'
import { ReactComponent as AddIcon } from '../../icons/add-two.svg'
import { Search, Popup } from '../../component/Index'
import { AddContact } from '../Index'

import styles from './Header.module.scss'

const Header = () => {
	const data = useSelector(selector.data)
	const popupStatus = useSelector(selector.popupStatus)
	const dispatch = useDispatch()
	const [ searchName, setSearchName ] = useState('')

	const handlerChange = (e) => {
		setSearchName(e.target.value)
	}
	useEffect(
		() => {
			const newData = data.filter((item) => item.name.toUpperCase().includes(searchName.toUpperCase()))
			searchName !== '' ? dispatch(action.searchData(newData)) : dispatch(action.searchData(data))
		},
		[ searchName, data ]
	)

	const changePopupState = () => dispatch(action.changePopupStatus(popupStatus))

	return (
		<header className={styles.app}>
			<div className={classNames(styles.app__basis, 'container')}>
				<div className={styles.app__basis__top_column}>
					<h2 className={styles.app__basis__top_column__title}>Contact</h2>
					<p className={styles.app__basis__top_column__text_block}> {data.length} members</p>
				</div>
				<div className={styles.app__basis__nav}>
					<h1 className={styles.app__basis__nav__title}>Contact</h1>
					<div className={styles.app__basis__nav__navigation}>
						<Search searchName={searchName} handlerChange={handlerChange} />
						<AddIcon className={styles.app__basis__nav__navigation__add_icon} onClick={changePopupState} />
					</div>
				</div>
			</div>
			{popupStatus && (
				<Popup closePopup={changePopupState} title='Add contact'>
					<AddContact />
				</Popup>
			)}
		</header>
	)
}

export default Header
