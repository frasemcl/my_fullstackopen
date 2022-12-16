import { useState, useEffect } from 'react';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

import personService from './services/persons';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	useEffect(() => {
		personService.getAll().then(initialPeople => {
			setPersons(initialPeople);
		});
	}, []);

	const addName = event => {
		event.preventDefault();

		const found = persons.find(person => person.name === newName);
		console.log(found);
		const personObject = {
			name: newName,
			number: newNumber,
			// id: persons.length + 1,
		};
		if (!found) {
			personService.create(personObject).then(returnedPerson => {
				setPersons(persons.concat(returnedPerson));
				setNewName('');
				setNewNumber('');
			});
		} else {
			if (
				window.confirm(
					`${newName} is already in the phonebook, replace the old number with the new one?`
				)
			) {
				console.log('updating phonebook');
				personService.update(found.id, personObject).then(returnedPerson => {
					setPersons(
						persons.map(person =>
							person.id !== returnedPerson.id ? person : returnedPerson
						)
					);
					setNewName('');
					setNewNumber('');
				});
			} else {
				setNewName('');
				setNewNumber('');
			}
		}
	};

	const handleFilter = event => {
		setFilter(event.target.value);
	};
	const handleNameChange = event => {
		setNewName(event.target.value);
	};
	const handleNumberChange = event => {
		setNewNumber(event.target.value);
	};

	const handleDeleteClick = event => {
		window.confirm('Are you sure you want to delete this contact?')
			? personService.delet(event.target.id).then(() => {
					personService.getAll().then(initialPeople => {
						setPersons(initialPeople);
					});
			  })
			: console.log('delete bypassed by user');
	};

	const peopleToShow =
		filter.length === 0
			? persons
			: persons.filter(persons =>
					persons.name.toLowerCase().includes(filter.toLowerCase())
			  );

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} handleFilter={handleFilter} />
			<h2>add a new</h2>
			<PersonForm
				addName={addName}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				newName={newName}
				newNumber={newNumber}
			/>
			<h2>Numbers</h2>
			<Person people={peopleToShow} handleDeleteClick={handleDeleteClick} />
		</div>
	);
};

export default App;
