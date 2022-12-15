const Languages = ({ langs }) => {
	const langList = Object.keys(langs).map(lang => (
		<li key={lang}>{langs[lang]}</li>
	));

	return (
		<>
			<h4>Languages</h4>
			<ul>{langList}</ul>
		</>
	);
};

export default Languages;
