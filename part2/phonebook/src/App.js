import { useState } from 'react';

const Person = ({ people }) => {
	return people.map((person, i) => (
		<div key={person.id}>
			{person.name} {person.number}
		</div>
	));
};

const PersonForm = ({
	addName,
	handleNameChange,
	handleNumberChange,
	newName,
	newNumber,
}) => {
	return (
		<form onSubmit={addName}>
			<div>
				name: <input value={newName} onChange={handleNameChange} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNumberChange} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

const Filter = ({ filter, handleFilter }) => {
	return (
		<div>
			filter shown with: <input value={filter} onChange={handleFilter} />
		</div>
	);
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	const addName = event => {
		event.preventDefault();

		const found = persons.find(person => person.name === newName);
		if (!found) {
			const personObject = {
				name: newName,
				number: newNumber,
				id:
					persons.reduce(
						(acc, person) => (person.id > acc ? person.id : acc),
						0
					) + 1, //find the highest person id then add 1
			};

			setPersons(persons.concat(personObject));
			setNewName('');
			setNewNumber('');
		} else {
			alert(`${newName} is already added to the phonebook`);
			setNewName('');
			setNewNumber('');
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
			<Person people={peopleToShow} />
		</div>
	);
};

export default App;
