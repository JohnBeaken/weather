export async function getForecast(location, hours = 6) {
    
    // Options and forecast
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    let forecast = {now: {success: false, temp: 0, probability: 0, rain: 0, snow: 0}, nextSix: {success: false, forecast: []}};

    // Get current hour weather data
    try {
        const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=imperial&apikey=DRQYiVKmUTeRYZDMtJqF4ij04agHDEYB`, options)
        const currentData = await response.json();

        // Parse current hour data
        const current = currentData.data.values;
        forecast.now.temp = Math.round(current.temperature);
        forecast.now.probability = Math.round(current.precipitationProbability);
        forecast.now.rain = Math.round(current.rainIntensity);
        forecast.now.snow = Math.round(current.snowIntensity);
        forecast.now.success = true;

    } catch (e) {
        console.log("loser");
    }

    // Get weather forecast
    try {
        const response2 = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h&units=imperial&apikey=DRQYiVKmUTeRYZDMtJqF4ij04agHDEYB`, options)
        const futureData = await response2.json();

        // Parse forecast data
        const hourly = futureData.timelines.hourly;
        for (let i = 0; i < hours; i++) {
            forecast.nextSix.forecast.push({
                time: `${i + 1}-Hour`,
                temp: Math.round(hourly[i].values.temperature),
                probability: Math.round(hourly[i].values.precipitationProbability),
                rain: Math.round(hourly[i].values.rainIntensity),
                snow: Math.round(hourly[i].values.snowIntensity)
            })
        }
        forecast.nextSix.success = true;
    } catch(e) {
        console.log("loser");
    }

    console.log(forecast);
    return forecast;

}