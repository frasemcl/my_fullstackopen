import { useState, useEffect } from 'react';
import axios from 'axios';
import Languages from './components/Languages';

const CountryDetails = ({ result }) => {
	return (
		<>
			<h2>{result.name.common}</h2>
			<div>capital {result.capital}</div>
			<div>area {result.area}</div>
			<Languages langs={result.languages} />
			<img src={result.flags.png} alt="flag" />
		</>
	);
};

const IntermResults = ({ countries }) => {
	return countries.map((country, i) => (
		<div key={i}>
			{country.name.common}
			<button
				key={i}
				onClick={() => {
					console.log('clicked');
				}}
			>
				show
			</button>
		</div>
	));
};

const CountryResults = ({ countries }) => {
	if (countries.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (countries.length > 1) {
		return <IntermResults countries={countries} />;
	} else if (countries.length === 1) {
		const result = countries[0];
		console.log(result);
		return <CountryDetails result={result} />;
	} else {
		return <div>Oops, try a different search</div>;
	}
};

const Filter = ({ filter, handleFilter }) => {
	return (
		<div>
			find countries: <input value={filter} onChange={handleFilter} />
		</div>
	);
};

const App = () => {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then(response => {
			setCountries(response.data);
		});
	}, []);

	const handleFilter = event => {
		setFilter(event.target.value);
	};

	const countriesToShow =
		filter.length === 0
			? countries
			: countries.filter(country =>
					country.name.common.toLowerCase().includes(filter.toLowerCase())
			  );

	return (
		<div>
			<Filter filter={filter} handleFilter={handleFilter} />
			<CountryResults countries={countriesToShow} />
		</div>
	);
};

export default App;
