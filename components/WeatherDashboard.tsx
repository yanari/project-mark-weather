'use client'

import { useWeatherFetch } from '@/hooks/useWeather'
import WeatherCard from './WeatherCard'
import { Location } from '@/shared/interfaces/weather.interface'

const LOCATIONS: Location[] = [
    { city: 'Joinville', country: 'BR' },
    { city: 'San Francisco', country: 'US' },
    { city: 'Urubici', country: 'BR' },
]

export default function WeatherDashboard() {
    const { data, error, isLoading } = useWeatherFetch(LOCATIONS)

    if (error) return <div>Error</div>

    if (isLoading) return <div>Loading</div>

    return (
        <div>
            <main className="m-auto max-w-sm grid gap-3">
                {data.map((weather) => {
                    return <WeatherCard key={weather.id} data={weather} />
                })}
            </main>
        </div>
    )
}
