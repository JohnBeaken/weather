import React from 'react';
import styles from './weathercard.module.css';

export default function WeatherCard({time, temp, rain, snow, probability}) {

    // Determine background based on probability variable
    let background;
    let display = "Rain";
    if (probability <= 25)
        background = styles.sunny;
    else if (probability < 50)
        background = styles.cloudy;
    else
        background = styles.rainy;
    
    // If it is not "sunny", determine if it is snowy or rainy
    if (snow > rain && probability > 25){
        background = styles.snowy;
        display = "Snow";
    }

    return (
        <li className={styles.wrapper}>
            <div className={background}>
                <p className={styles.time}>{time}</p>
                <p className={styles.temp}>{temp}&deg;</p>
                <p className={styles.fall}>{display} - {probability}%</p>
            </div>
        </li>
    );
}