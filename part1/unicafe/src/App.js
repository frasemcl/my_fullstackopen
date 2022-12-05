import { useState } from 'react';

const Button = props => (
	<button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({ label, stat, sufx = '' }) => (
	<tr>
		<td>{label}</td>
		<td>
			{stat} {sufx}
		</td>
	</tr>
);

const Statistics = ({ good, neutral, bad, total, mean, posi }) => {
	if (total === 0) {
		return <div>No feedback given</div>;
	}

	return (
		<div>
			<table>
				<tbody>
					<StatisticLine label="good" stat={good} />
					<StatisticLine label={'neutral'} stat={neutral} />
					<StatisticLine label={'bad'} stat={bad} />
					<StatisticLine label={'all'} stat={total} />
					<StatisticLine label={'average'} stat={(mean / total).toFixed(2)} />
					<StatisticLine
						label={'positve'}
						stat={(posi * 100).toFixed(0)}
						sufx="%"
					/>
				</tbody>
			</table>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const total = good + bad + neutral;
	const mean = (good * 1 + bad * -1 + neutral * 0) / total;
	const posi = good / total;

	const props = {
		good: good,
		neutral: neutral,
		bad: bad,
		total: total,
		mean: mean,
		posi: posi,
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<h1>Statistics</h1>
			<Statistics {...props} />
		</div>
	);
};

export default App;
