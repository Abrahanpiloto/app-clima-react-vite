import { useState } from "react";
import "./weatherForm.css";

export default function WeatherForm({ onChangeCity }) {
	const [city, setCity] = useState("");

	function onChange(e) {
		const value = e.target.value;

		if (value !== "") {
			setCity(value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		onChangeCity(city);
	}

	return (
		<form onSubmit={handleSubmit} className="container">
			<input
				className="inputCity"
				type="text"
				placeholder="Ingresa aqui la ciudad y presiona enter"
				onChange={onChange}
			/>
		</form>
	);
}
