import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import selector from '../../store/selector/Index'
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg'
import { ReactComponent as EmailIcon } from '../../icons/mail.svg'
import { ReactComponent as WorkPlaceIcon } from '../../icons/work.svg'
import { ReactComponent as PlaceIcon } from '../../icons/place.svg'

import styles from './InfoContact.module.scss'

const InfoContact = ({ id }) => {
	const data = useSelector(selector.data)
	const { name, phoneOne, phoneTwo, workplace, address, email } = data[id]

	return (
		<div className={styles.column}>
			<p className={styles.column__name}>{name}</p>
			<div className={styles.column__item}>
				<PhoneIcon className={styles.column__item__icon} />
				<p className={styles.column__item__text}>{phoneOne}</p>
			</div>
			<div className={styles.column__item}>
				<PhoneIcon className={styles.column__item__icon} />
				<p className={styles.column__item__text}>{phoneTwo}</p>
			</div>
			<div className={styles.column__item}>
				<EmailIcon className={styles.column__item__icon} />
				<p className={styles.column__item__text}>{email}</p>
			</div>
			<div className={styles.column__item}>
				<WorkPlaceIcon className={styles.column__item__icon} />
				<p className={styles.column__item__text}>{workplace}</p>
			</div>
			<div className={styles.column__item}>
				<PlaceIcon className={styles.column__item__icon} />
				<p className={styles.column__item__text}>{address}</p>
			</div>
		</div>
	)
}

InfoContact.propTypes = {
	id: PropTypes.number.isRequired,
}

export default InfoContact
