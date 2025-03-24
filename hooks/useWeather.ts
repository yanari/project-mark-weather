import { Location, WeatherData } from '@/shared/interfaces/weather.interface'
import { useQueries } from '@tanstack/react-query'

const REFRESH_INTERVAL = 10 * 60 * 1000
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

const fetchUrl = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) throw Error('Failed to fetch', { cause: response.text })
    return response.json()
}

export function useWeatherFetch(locations: Location[]) {
    if (!API_KEY) {
        throw new Error('OpenWeatherMap API key not found.')
    }

    const queries = useQueries({
        queries: locations.map((location) => {
            return {
                queryKey: ['weather', location.city],
                queryFn: () => {
                    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&units=metric&appid=${API_KEY}`
                    return fetchUrl(URL)
                },
                refetchInterval: REFRESH_INTERVAL,
            }
        }),
        combine: (results) => {
            return {
                data: results.map((result) => result.data as WeatherData),
                isPending: results.some((result) => result.isPending),
                error: results.some((result) => result.error),
            }
        },
    })

    return {
        data: queries.data,
        isLoading: queries.isPending,
        error: queries.error,
    }
}

function getColorByTemperature(temperature: number) {
    // Temperature color coding:
    // 5°C or below → Blue
    // Above 5°C and up to 25°C → Orange
    // Above 25°C → Red

    if (temperature <= 5) return 'text-blue-500'
    if (temperature <= 25) return 'text-orange-500'
    return 'text-red-500'
}
