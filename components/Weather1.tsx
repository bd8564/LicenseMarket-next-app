"use client";
import React, { useEffect, useState } from "react";

const Weather1 = () => {
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

      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=51.39&current=temperature_2m,wind_speed_10m"
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
  }, [refresh]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Tehran Weather</h1>

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
        className="border border-green-400 bg-green-400 px-4 py-2 rounded-xl cursor-pointer"
      >
        Refresh Weather
      </button>
    </div>
  );
};

export default Weather1;
