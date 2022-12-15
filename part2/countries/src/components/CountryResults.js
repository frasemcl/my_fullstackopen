import CountryDetails from './CountryDetails';
import IntermResults from './IntermResults';

const CountryResults = ({
	countries,
	clickedCountry,
	showClicked,
	handleShowClick,
}) => {
	if (countries.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (countries.length > 1) {
		if (showClicked) {
			return (
				<>
					<IntermResults
						countries={countries}
						showClicked={showClicked}
						handleShowClick={handleShowClick}
					/>
					<CountryDetails result={clickedCountry} />
				</>
			);
		} else {
			return (
				<IntermResults
					countries={countries}
					showClicked={showClicked}
					handleShowClick={handleShowClick}
				/>
			);
		}
	} else if (countries.length === 1) {
		const result = countries[0];
		// setShowClicked(false);
		return <CountryDetails result={result} />;
	} else {
		return <div>Oops, try a different search</div>;
	}
};

export default CountryResults;
