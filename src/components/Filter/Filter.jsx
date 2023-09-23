import React from 'react'

export const Filter = ({ value, filter }) => {

	return (
		<label>
			<span>Filter</span>
			<input type="text"
				name="filter"
				title="Enter search name"
				onChange={filter}
				value={value}
				required />
		</label>

	)
}
