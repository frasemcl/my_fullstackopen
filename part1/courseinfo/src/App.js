const Header = data => {
	return (
		<div>
			<h1>{data.course.name}</h1>
		</div>
	);
};

const Part = ({ name, exercises }) => {
	return (
		<div>
			<p>
				{name} {exercises}
			</p>
		</div>
	);
};

const Content = data => {
	console.log(data.course.parts[0]);

	return (
		<div>
			<Part {...data.course.parts[0]} />
			<Part {...data.course.parts[1]} />
			<Part {...data.course.parts[2]} />
		</div>
	);
};

const Total = data => {
	console.log(data);

	return (
		<div>
			<p>
				Number of exercises{' '}
				{data.course.parts[0].exercises +
					data.course.parts[1].exercises +
					data.course.parts[2].exercises}
			</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	);
};

export default App;
