import React from 'react'
import { useDispatch } from 'react-redux'

import action from '../../store/action/Index'

import styles from './Footer.module.scss'

const Footer = () => {
	const dispatch = useDispatch()

	const selectAllItem = () => {
		dispatch(action.selectAllItem())
	}

	const deleteItem = () => {
		dispatch(action.deleteItem())
	}

	return (
		<footer className={styles.column}>
			<div className={styles.column__basis}>
				<button onClick={selectAllItem} className={styles.column__basis__btn}>
					All Completed
				</button>
				<button onClick={deleteItem} className={styles.column__basis__btn}>
					Clear Completed
				</button>
			</div>
		</footer>
	)
}

export default Footer
