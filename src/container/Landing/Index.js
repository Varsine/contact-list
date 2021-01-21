import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import selector from '../../store/selector/Index'
import action from '../../store/action/Index'
import { ReactComponent as UserIcon } from '../../icons/user.svg'
import { ContactIcons, Popup, InfoContact } from '../../component/Index'
import { MessageChat } from '../Index'

import styles from './Landing.module.scss'

const Landing = () => {
	const data = useSelector(selector.data)
	const currentData = useSelector(selector.currentData)
	const dispatch = useDispatch()
	const ContactItemRef = useRef(null)
	const [ isOpenInfo, setisOpenInfo ] = useState(false)
	const [ isOpenMessage, setIsOpenMessage ] = useState(false)
	const [ isOpen, setIsOpen ] = useState(false)
	const [ checkedID, setCheckedID ] = useState(null)

	useEffect(() => {
		dispatch(action.searchData(data))
	}, [])

	const openBottomColumn = (id) => {
		setIsOpen(!isOpen)
		const item = ContactItemRef.current.childNodes[id].lastChild.lastChild
		item.classList.toggle(styles.column__basis__item__inner__bottom_column_block)
	}

	const clickInfoHandler = (id) => {
		setisOpenInfo(!isOpenInfo)
		setCheckedID(id)
	}

	const clickMessageHandler = (id) => {
		setIsOpenMessage(!isOpenMessage)
		setCheckedID(id)
	}

	const changeCompleted = (id) => {
		dispatch(action.changeCompleted(id))
	}

	const dataList = currentData.map((item, idx) => {
		return (
			<div className={styles.column__basis__item} key={`item.name ${idx}`}>
				<input
					name='completed'
					className={classNames(styles.column__basis__item__checkbox, {
						[styles.column__basis__item__checkbox_selected]: item.completed
					})}
					type='checkbox'
					onClick={() => changeCompleted(item.id)}
				/>
				<div className={styles.column__basis__item__inner} onClick={() => openBottomColumn(idx)}>
					<div className={styles.column__basis__item__inner__child}>
						{item.img ? (
							<img className={styles.column__basis__item__inner__child__img} src={item.img} alt='User' />
						) : (
							<UserIcon className={styles.column__basis__item__inner__child__img} />
						)}
						<p className={styles.column__basis__item__inner__child__text_block}>{item.name}</p>
					</div>
					<div className={classNames(styles.column__basis__item__inner__bottom_column)}>
						<p className={styles.column__basis__item__inner__bottom_column__text_block}>
							Phone: {item.phoneOne}
						</p>
						{item.phoneTwo !== '' && (
							<p className={styles.column__basis__item__inner__bottom_column__text_block}>
								Phone: {item.phoneTwo}
							</p>
						)}
						<ContactIcons
							openUserInfo={() => clickInfoHandler(idx)}
							openMessage={() => clickMessageHandler(idx)}
							id={idx}
						/>
					</div>
				</div>
			</div>
		)
	})

	return (
		<section className={styles.column}>
			<div className={classNames(styles.column__basis, 'container')} ref={ContactItemRef}>
				{dataList}
				{isOpenInfo && (
					<Popup closePopup={clickInfoHandler}>
						<InfoContact id={checkedID} />
					</Popup>
				)}
				{isOpenMessage && (
					<Popup closePopup={clickMessageHandler}>
						<MessageChat id={checkedID} />
					</Popup>
				)}
			</div>
		</section>
	)
}

export default Landing
