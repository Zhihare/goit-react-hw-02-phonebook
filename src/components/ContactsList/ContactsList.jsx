import React from 'react'

export const ContactsList = ({ handleDelete, renderFilter }) => {


	return (
		<div>
			{renderFilter.map(({ name, number, id }) => {
				return (
					<div key={id}>
						<span>{name}: {number}</span>
						<button onClick={() => handleDelete(name)}>Delete </button>
					</div>
				);
			})
			}
		</div>
	);
};
