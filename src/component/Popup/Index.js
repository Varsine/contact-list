import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackIcon } from '../../icons/back-arrow.svg'

import styles from './Popup.module.scss'

const Popup = ({ closePopup, title, children }) => {
	return (
		<div className={styles.app}>
			<div className={styles.app__inner}>
				<BackIcon className={styles.app__inner__back_icon} onClick={closePopup} />
				<div className={styles.app__inner__content}>
					<h2 className={styles.app__inner__content__title}>{title}</h2>
					<div className={styles.app__inner__content__child}>{children}</div>
				</div>
			</div>
		</div>
	)
}

Popup.defaultProps = {
	title: '',
	closePopup: () => {}
}

Popup.propTypes = {
	title: PropTypes.string,
	closePopup: PropTypes.func,
	children: PropTypes.node.isRequired
}

export default Popup
