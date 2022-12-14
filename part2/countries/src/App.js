import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryResults from './components/CountryResults';

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
	const [showClicked, setShowClicked] = useState(false);
	const [clickedCountry, setClickedCountry] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then(response => {
			setCountries(response.data);
		});
	}, []);

	const handleShowClick = event => {
		console.log(countriesToShow[event.target.id]);
		setClickedCountry(countriesToShow[event.target.id]);
		setShowClicked(true);
	};

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
			<CountryResults
				countries={countriesToShow}
				clickedCountry={clickedCountry}
				showClicked={showClicked}
				handleShowClick={handleShowClick}
			/>
		</div>
	);
};

export default App;
