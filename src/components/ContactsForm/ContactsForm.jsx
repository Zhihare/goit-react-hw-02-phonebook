import React, { Component } from 'react'
import { nanoid } from "nanoid";

export default class ContactsForm extends Component {
	state = {
		name: '',
		number: '',
	}

	hendleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value })

	}

	handleSubmit = event => {
		event.preventDefault();

		const contactsData = {
			id: nanoid(),
			name: this.state.name,
			number: this.state.number,
		}

		this.props.handleAddContact(contactsData);

		this.setState({
			name: '',
			number: '',
		});

	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<span>Name</span>
					<input onChange={this.hendleInputChange} value={this.state.name} type="text" name="name" required />
				</label>
				<label>
					<span>Number</span>
					<input onChange={this.hendleInputChange} value={this.state.number} type="tel" name="number" required />
				</label>
				<button type="submit">Add contact</button>
			</form>
		)
	}
}
