import Languages from './Languages';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ result, weather }) => {
	if (weather !== '') {
		return (
			<>
				<h3>Weather in {result.capital}</h3>
				<div>temperature {(weather.temp - 273.15).toFixed(2)} Celcius </div>
				<img
					src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt="weather icon"
				/>
				<div>wind {weather.wind_speed.toFixed(2)} m/s</div>
			</>
		);
	} else {
		return;
	}
};

const CountryDetails = ({ result }) => {
	const [weather, setWeather] = useState('');
	const api_key = process.env.REACT_APP_API_KEY;
	const exclude = 'minutely,hourly,daily,alerts';
	const lat = result.capitalInfo.latlng[0];
	const lon = result.capitalInfo.latlng[1];
	const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${api_key}`;

	useEffect(() => {
		axios.get(url).then(response => {
			setWeather(response.data.current);
		});
		//Revisit this, why the multiple calls? For now:
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h2>{result.name.common}</h2>
			<div>capital {result.capital}</div>
			<div>area {result.area}</div>
			<Languages langs={result.languages} />
			<img src={result.flags.png} alt="flag" />
			<Weather weather={weather} result={result} />
		</>
	);
};

export default CountryDetails;
