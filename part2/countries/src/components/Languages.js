const Languages = ({ langs }) => {
	const langList = Object.keys(langs).map(lang => (
		<li key={lang}>{langs[lang]}</li>
	));

	return (
		<>
			<h3>Languages</h3>
			<ul>{langList}</ul>
		</>
	);
};

export default Languages;
