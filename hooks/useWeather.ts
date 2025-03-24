import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

const REFRESH_INTERVAL = 10 * 60 * 1000
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

interface Location {
    city: string
    country: string
}

const LOCATIONS: Location[] = [
    { city: 'Joinville', country: 'BR' },
    { city: 'San Francisco', country: 'US' },
    { city: 'Urubici', country: 'BR' },
]

const fetchUrl = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) throw Error('Failed to fetch', { cause: response.text })
    return response.json()
}

export function useWeatherFetch(location: Location) {
    if (!API_KEY) {
        throw new Error('OpenWeatherMap API key not found.')
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${API_KEY}`

    const { data, error } = useQuery({
        queryKey: ['weather'],
        queryFn: () => fetchUrl(URL),
        refetchInterval: REFRESH_INTERVAL,
    })

    return {
        data,
        error,
    }
}
