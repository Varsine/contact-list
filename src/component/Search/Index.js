import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { ReactComponent as SearchIcon } from '../../icons/Search.svg'
import InputField from '../InputField/Index'

import styles from './Search.module.scss'

const Search = ({ searchName, handlerChange }) => {
	const [ isOpen, setIsOpen ] = useState(false)

	const openSearch = () => setIsOpen(!isOpen)

	return (
		<div className={classNames(styles.column, { [styles.column_open]: isOpen })} >
			<div className={styles.column__icon} onClick={openSearch}>
				<SearchIcon />
			</div>
			{isOpen && (
				<InputField
					className={styles.column_open__search}
					value={searchName}
					onChange={handlerChange}
					placeholder='Search name...'
					type='text'
				/>
			)}
		</div>
	)
}

Search.defaultProps = {
	searchName: '',
	handlerChange: () => {}
}

Search.propTypes = {
	searchName: PropTypes.string,
	handlerChange: PropTypes.func
}

export default Search
