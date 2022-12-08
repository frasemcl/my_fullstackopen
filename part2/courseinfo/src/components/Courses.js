const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ parts }) => {
	const initialVal = 0;
	const total = parts.reduce((accum, part) => {
		return (accum += part.exercises);
	}, initialVal);
	return <strong>total of {total} exercises</strong>;
};

const Content = ({ parts }) => (
	<>
		{parts.map(part => (
			<Part key={part.id} part={part} />
		))}
	</>
);

const Course = ({ course }) => (
	<>
		<Header name={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts} />
	</>
);

const Courses = ({ courses }) => (
	<>
		{courses.map(course => (
			<Course key={course.id} course={course} />
		))}
	</>
);

export default Courses;
