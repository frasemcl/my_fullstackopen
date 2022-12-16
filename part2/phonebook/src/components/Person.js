const Person = ({ people, handleDeleteClick }) => {
	return people.map(person => (
		<div key={person.id}>
			<div key={person.id}>
				{person.name} {person.number}
				<button id={person.id} onClick={handleDeleteClick}>
					delete
				</button>
			</div>
		</div>
	));
};

export default Person;
