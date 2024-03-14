import React from 'react';
import styles from './searchbar.module.css';
import { getForecast } from '../util/Tomorrow';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNow } from '../store/nowSlice';
import { resetForecast, addForecast } from '../store/forecastSlice';

/*  A component that allows the user to search for a city or location. The component will then get the weather data, update the state,
    and display the name of the location the user searched for. */
export default function SearchBar() {

    // Create dispatch
    const dispatch = useDispatch();

    // Set the component-level state to track the search and location name
    const [search, setSearch] = useState("");
    const [oldSearch, setOldSearch] = useState("");

    // Function called when the form is submitted
    const handleSubmit = async (e) => {

        // Prevent the browser from actually submitting the form
        e.preventDefault();

        // Check to ensure that the search is not identical to the information already being displayed AND empty
        if (search !== oldSearch && search !== "") {

            // Get the forecast
            const forecast = await getForecast(search);
            
            // If the current weather data was retrieved, update the state
            if (forecast.now.success) {
                dispatch(setNow(forecast.now));
            }

            // If the weather forecast data was retrieved, update the state
            if (forecast.nextSix.success) {
                dispatch(resetForecast());
                for (let i = 0; i < forecast.nextSix.forecast.length; i++) {
                    dispatch(addForecast(forecast.nextSix.forecast[i]));
                }
            }

            // Update local state
            setOldSearch(search);
            setSearch("");
        }
    }

    // Return the component
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div
                className={styles.wrapper}
            >
                <input
                    value={search}
                    type="search"
                    placeholder="Your City Here"
                    className={styles.input}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className={styles.button}
                >
                </button>
            </div>
            <h2>Weather in: {oldSearch}</h2>
        </form>
    );
}