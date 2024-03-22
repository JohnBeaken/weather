import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import WeatherCard from '../WeatherCard/WeatherCard.js';
import styles from './forecast.module.css';

export default function Forecast() {

    // Application State
    const now = useSelector((state) => state.now);
    const forecast = useSelector((state) => state.forecast);

    //Create the slider buttons
    const slider = React.useRef(null);

    // Slider settings
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className={styles.wrapper}>
            <Slider {...settings} ref={slider}>
                <div>
                    <WeatherCard
                        time="Now"
                        temp={now.temp}
                        rain={now.rain}
                        snow={now.snow}
                        probability={now.probability}
                    />
                </div>

                {forecast.map((hour) => {
                    return (
                        <div>
                            <WeatherCard
                                time={hour.time}
                                temp={hour.temp}
                                rain={hour.rain}
                                snow={hour.snow}
                                probability={hour.probability}
                            />
                        </div>
                    );
                })}
            </Slider>
            <div className={styles.arrows}>
                <button className={styles.button} onClick={() => slider?.current?.slickPrev()}>&larr;</button>
                <button className={styles.button} onClick={() => slider?.current?.slickNext()}>&rarr;</button>
            </div>
        </div>
    );
}

