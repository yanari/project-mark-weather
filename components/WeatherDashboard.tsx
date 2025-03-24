'use client'

import { useQuery } from "@tanstack/react-query";

const OPENWEATHER_API_KEY = '';

export default function CityTemperature() {
    const { isPending, error, data } = useQuery({
            queryKey: ['londonWeather'],
            queryFn: () =>
                fetch(
                    `http://api.openweathermap.org/geo/1.0/direct?q=Joinville,SC,BR&limit=5&appid=${OPENWEATHER_API_KEY}`
                )
                    .then((res) => res.json())
        });

        console.log('data', data)
    
        if (isPending) return 'Loading...';
    
        if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            London
        </div>
    )
}