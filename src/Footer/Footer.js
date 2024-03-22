import React from 'react';
import styles from './footer.module.css'
import { useState } from 'react';

// A component that displays the designer name and a list of photo credits
export default function Footer() {

    // Style for the ul
    const [ulStyles, setUlStyles] = useState(styles.disappear);

    // Handle Mouse Enter
    const handleMouseEnter = () => {
        setUlStyles(styles.appear);
    }

    // Handle Mouse Leave
    const handleMouseLeave = () => {
        setUlStyles(styles.disappear);
    }

    return (
        <div className={styles.footer}>
            {/*Designed by */}
            <p
                onMouseEnter={(handleMouseEnter)}
                onMouseLeave={handleMouseLeave}
            >Designed by: John W. Beaken - Photos by</p>

            <ul className={ulStyles}>
                <li>Earth Picture: <a target="_blank" href="https://www.pexels.com/photo/earth-planet-76969/">Pixabay</a> </li>
                <li>Overcast Picture: <a target="_blank" href="https://www.pexels.com/photo/gray-clouds-414659/">Pixabay</a></li>
                <li>Sunny Picture: <a target="_blank" href="https://www.pexels.com/photo/landscape-photograph-of-skies-912364/">Brett Sayles</a></li>
                <li>Rainy Picture: <a target="_blank" href="https://www.pexels.com/photo/body-of-water-1154510/">Josh Sorenson</a></li>
                <li>Snowy Picture: <a target="_blank" href="https://www.pexels.com/photo/snowfall-over-road-in-forest-in-winter-16552342/">Väinö Parjanen</a></li>
                <li><a target="_blank" href="https://icons8.com/icon/59795/earth-planet">Earth</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
            </ul>
        </div>
    );
}