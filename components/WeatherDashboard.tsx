'use client'

import { useWeatherFetch } from '@/hooks/useWeather'

const location = {
    city: 'Joinville',
    country: 'BR',
}

export default function WeatherDashboard() {
    const { data, error } = useWeatherFetch(location)

    if (error) return <div>Error</div>

    return (
        <div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    )
}
