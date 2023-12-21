import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import "./weatherApp.css";
import Loading from "./loading";

export default function WeatherApp() {
	const [weather, setWeather] = useState(null);

	// useEffect es un hook que sirve para: (efectos laterales)
	// 1) Ejecutar codigo apenas cargue la app
	// 2) Cada vez que se ejecute un renderizado de toda la app
	// 3) Cuando un componente se destruye o muere
	// useEffect es una funcion que recibe dos parametros: un callback(otra funcion) y un array de dependencias
	// si el array esta vacio se ejecutara una sola vez apenas cargue la app

	useEffect(() => {
		loadInfo();
	}, []);

	useEffect(() => {
		document.title = `${weather?.location.name ?? ""}, ${
			weather?.location.country
		}`;
	}, [weather]);

	async function loadInfo(city = "valencia") {
		try {
			const request = await fetch(
				`${import.meta.env.VITE_APP_URL}&key=${
					import.meta.env.VITE_APP_KEY
				}&q=${city}`
			);

			const response = await request.json();

			setTimeout(() => {
				setWeather(response);
			}, 2000);

			console.log(response);
		} catch (error) {}
	}

	function handleChangeCity(city) {
		setWeather(null);
		loadInfo(city);
	}

	return (
		<div className="weatherContainer">
			<WeatherForm onChangeCity={handleChangeCity} />
			{weather ? <WeatherInfo weather={weather} /> : <Loading />}
		</div>
	);
}
