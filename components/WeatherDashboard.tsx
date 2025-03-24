'use client'

import { useWeather } from '@/hooks/useWeather'
import WeatherCard from './WeatherCard'
import { Location } from '@/shared/interfaces/weather.interface'
import Loader from './Loader'
import Error from './Error'

const LOCATIONS: Location[] = [
    { city: 'Joinville', country: 'BR' },
    { city: 'San Francisco', country: 'US' },
    { city: 'Urubici', country: 'BR' },
]

export default function WeatherDashboard() {
    const { data, error, isLoading } = useWeather(LOCATIONS)

    if (error) return <Error />

    if (isLoading) return <Loader />

    return (
        <div className="m-auto max-w-3xl grid md:grid-cols-2 gap-6">
            {data.map((weather) => {
                return <WeatherCard key={weather.id} data={weather} />
            })}
        </div>
    )
}
