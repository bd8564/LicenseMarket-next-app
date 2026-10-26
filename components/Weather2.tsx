
"use client";

import React, { useEffect, useState } from "react";

const cities = [
  {
    name: "Tehran",
    latitude: 35.69,
    longitude: 51.39,
  },
  {
    name: "Berlin",
    latitude: 52.52,
    longitude: 13.41,
  },
  {
    name: "Istanbul",
    latitude: 41.01,
    longitude: 28.97,
  },
];

const Weather2 = () => {
  const [selectedCity, setSelectedCity] = useState("Tehran");
  const [temperature, setTemperature] = useState<number | null>(null);
  const [windSpeed, setWindSpeed] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setError("");

      const selectedCityInfo = cities.find(
        (city) => city.name === selectedCity
      );

      if (!selectedCityInfo) {
        setError("Failed to load weather");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedCityInfo.latitude}&longitude=${selectedCityInfo.longitude}&current=temperature_2m,wind_speed_10m`
        );

        if (!res.ok) {
          throw new Error("Error");
        }

        const body = await res.json();

        setTemperature(body.current.temperature_2m);
        setWindSpeed(body.current.wind_speed_10m);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch {
        setError("Failed to load weather");
      }

      setLoading(false);
    };

    getWeather();
  }, [selectedCity, refresh]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">{selectedCity} Weather</h1>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="border rounded p-2"
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {loading && <h2>Loading...</h2>}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <p>Temperature: {temperature} °C</p>
          <p>Wind Speed: {windSpeed} km/h</p>
          <p>Last updated: {lastUpdated}</p>
        </>
      )}

      <button
        onClick={() => setRefresh(refresh + 1)}
        className="border border-green-400 bg-green-400 px-4 py-2 rounded-xl"
      >
        Refresh Weather
      </button>
    </div>
  );
};

export default Weather2;