import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './InputField.module.scss'

const InputField = ({ value, name, type, placeholder, onChange, icon, className }) => (
	<div className={classNames(styles.app, className)}>
		<div className={styles.app__icon}>{icon}</div>
		<input
			className={styles.app__input}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	</div>
)

InputField.defaultProps = {
	value: '',
	placeholder: '',
	type: '',
	onChange: () => {},
	name: '',
	className: ''
}
InputField.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	icon: PropTypes.node,
	name: PropTypes.string,
	className: PropTypes.string
}

export default InputField
