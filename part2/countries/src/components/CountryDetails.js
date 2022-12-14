import Languages from './Languages';

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

export default CountryDetails;
