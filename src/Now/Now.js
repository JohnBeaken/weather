import React from 'react';
import styles from './now.module.css';

// A component that displays the current weather using data passed from the Info component
export default function Now({temp, rain, snow, probability}) {

    // Determine background based on probability variable
    let background;
    let display = "rain";
    if (probability <= 25)
        background = styles.sunny;
    else if (probability < 50)
        background = styles.cloudy;
    else
        background = styles.rainy;
    
    // If it is not "sunny", determine if it is snowy or rainy
    if (snow > rain && probability > 25){
        background = styles.snowy;
        display = "snow";
    }

    // Return the component
    return (
        <div className={styles.wrapper}>
            <div className={background}>
                <h2>Now</h2>
                <p>{temp}&deg;</p>
                <p className={styles.fall}>{probability}% chance of {display}</p>
            </div>
        </div>
    );
}