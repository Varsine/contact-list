import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import selector from '../../store/selector/Index'
import action from '../../store/action/Index'
import { ReactComponent as SendIcon } from '../../icons/send.svg'
import { InputField, Icon } from '../../component/Index'

import styles from './MessageChat.module.scss'

const MessageChat = ({ id }) => {
	const data = useSelector(selector.data)
	const dispatch = useDispatch()
	const { name, messages } = data[id]
	const [ messageValue, setMessageValue ] = useState('')
	const changeHandel = (e) => setMessageValue(e.target.value)

	const clickSendMessage = (num) => {
		const newMessages = { phoneNum: num, text: messageValue }
		messageValue !== '' && dispatch(action.sendMessdge(id, newMessages))
		setMessageValue('')
	}

	return (
		<div className={styles.column}>
			<h2 className={styles.column__title}>{name} Message</h2>
			<div className={styles.column__message_list}>
				{messages.map((item, idx) => {
					return (
						<div className={styles.column__message_list__item} key={`item ${idx}`}>
							<p className={styles.column__message_list__item__phone_num}>{item.phoneNum}</p>
							<div className={styles.column__message_list__item__text}>{item.text}</div>
						</div>
					)
				})}
			</div>
			<div className={styles.column__bottom_column}>
				<InputField
					className={styles.column__bottom_column__input}
					value={messageValue}
					onChange={changeHandel}
				/>
				<div className={styles.column__bottom_column__icons}>
					<Icon
						phoneNumber={1}
						onClick={() => clickSendMessage(1)}
						className={styles.column__bottom_column__icons__one_phone}
						icon={<SendIcon className={styles.column__bottom_column__icons__icon} />}
					/>
					<Icon
						phoneNumber={2}
						onClick={() => clickSendMessage(2)}
						className={styles.column__bottom_column__icons__two_phone}
						icon={<SendIcon className={styles.column__bottom_column__icons__icon} />}
					/>
				</div>
			</div>
		</div>
	)
}

MessageChat.propTypes = {
	id: PropTypes.number.isRequired
}

export default MessageChat
