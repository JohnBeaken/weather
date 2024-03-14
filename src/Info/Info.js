import React from 'react';
import styles from './info.module.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import Now from '../Now/Now';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';

// A wrapper component that displays weather data components, as well as passing state to each of them
export default function Info() {

    // Application State
    const forecast = useSelector((state) => state.forecast);
    const now = useSelector((state) => state.now);

    return(
        <div className={styles.wrapper}>
            
            {/*SearchBar component*/}
            <SearchBar />

            {/*Current Weather*/}
            <Now
                temp={now.temp}
                rain={now.rain}
                snow={now.snow}
                probability={now.probability}
            />

            {/*A ul that displays a WeatherCard for each element in the forecast state*/}
            <ul>
                {forecast.map((hour) => {
                    return (
                        <WeatherCard
                            time={hour.time}
                            temp={hour.temp}
                            rain={hour.rain}
                            snow={hour.snow}
                            probability={hour.probability}
                        />
                    );
                })}
            </ul>
            
        </div>
    );
}