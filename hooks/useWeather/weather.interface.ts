export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface MainWeatherData {
    temp: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface Sys {
    country: string
}

export interface WeatherData {
    id: string
    weather: Weather[]
    main: MainWeatherData
    name: string
    sys: Sys
    lastUpdatedAt: Date
}
