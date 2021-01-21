import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../IconComponent/Index'
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg'
import { ReactComponent as MessageIcon } from '../../icons/message.svg'
import { ReactComponent as InfoIcon } from '../../icons/info.svg'

import styles from './ContactIcons.module.scss'

const ContactIcons = ({ openMessage, openUserInfo }) => {
	return (
		<div className={styles.column}>
			<Icon
				phoneNumber={1}
				className={styles.column__one_phone}
				icon={<PhoneIcon className={styles.column__icon} />}
			/>
			<Icon
				phoneNumber={2}
				className={styles.column__two_phone}
				icon={<PhoneIcon className={styles.column__icon} />}
			/>
			<Icon onClick={openMessage} icon={<MessageIcon className={styles.column__icon} />} />
			<Icon onClick={openUserInfo} icon={<InfoIcon className={styles.column__icon} />} />
		</div>
	)
}

ContactIcons.defaultProps = {
	openMessage: () => {},
	openUserInfo: () => {}
}

ContactIcons.propTypes = {
	openMessage: PropTypes.func,
	openUserInfo: PropTypes.func
}
export default ContactIcons
