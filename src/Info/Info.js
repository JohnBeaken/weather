import React from 'react';
import styles from './info.module.css';
import typeStyles from '../animations/type.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Forecast from '../Forecast/Forecast';
import { useSelector } from 'react-redux';
import ForecastSuspense from '../Forecast/ForecastSuspense';

// A wrapper component that displays weather data components, as well as passing state to each of them
export default function Info() {

    // Application State
    const now = useSelector((state) => state.now);

    return(
        <div className={styles.wrapper}>
            
            {/*SearchBar component*/}
            <SearchBar />

            {/*A Forecast component*/}
            {Object.keys(now).length === 0 && <h2 className={typeStyles.type}>Awaiting location...</h2>}
            {Object.keys(now).length === 0 && <ForecastSuspense />}
            {Object.keys(now).length > 0 && <Forecast/>}
        </div>
    );
}