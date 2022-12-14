const IntermResults = ({ countries, showClicked, handleShowClick }) => {
	return countries.map((country, i) => (
		<div key={i}>
			{country.name.common}
			<button key={i} id={i} onClick={handleShowClick}>
				show
			</button>
		</div>
	));
};

export default IntermResults;
