import "./weatherInfo.css";
export default function WeatherInfo({ weather }) {
	return (
		<div className="mainInfo">
			<div className="city">{weather?.location.name}</div>
			<div className="country">{weather?.location.country}</div>
			<div className="row">
				<div className="containerTemp">
					<div className="condition">{weather?.current.condition.text}</div>
					<div className="condition">
						Temperatura: {weather?.current.temp_c}°C
					</div>
					<div className="condition">Humedad: {weather?.current.humidity}%</div>
				</div>
				<div>
					<img
						src={`http:${weather?.current.condition.icon}`}
						alt="image weather"
					/>
				</div>
			</div>
			<iframe
				title="mapa"
				src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.12432379235!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!!2f0!3f0!!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1703169057887!5m2!1ses-419!2spe`}
				width="100%"
				height="450"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}
