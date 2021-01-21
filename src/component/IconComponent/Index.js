import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Icon.module.scss'

const Icon = ({ icon, onClick, phoneNumber, className }) => (
	<div className={styles.column} onClick={onClick}>
		<div className={classNames(styles.column__number, className)}>{phoneNumber}</div>
		{icon}
	</div>
)

Icon.defaultProps = {
	onClick: ()=>{},
	className: ''
}

Icon.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	icon: PropTypes.node.isRequired,
	phoneNumber: PropTypes.number,
}
export default Icon
