import { Location, WeatherData } from '@/shared/interfaces/weather.interface'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

const REFRESH_INTERVAL = 10 * 60 * 1000
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

const fetchUrl = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) throw Error('Failed to fetch', { cause: response.text })
    return response.json()
}

export function useWeatherFetch(location: Location) {
    if (!API_KEY) {
        throw new Error('OpenWeatherMap API key not found.')
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&units=metric&appid=${API_KEY}`

    const { data, error, isLoading } = useQuery({
        queryKey: ['weather'],
        queryFn: () => fetchUrl(URL),
        refetchInterval: REFRESH_INTERVAL,
    })

    const weatherData: WeatherData = data

    return {
        data: weatherData,
        error,
        isLoading,
    }
}
