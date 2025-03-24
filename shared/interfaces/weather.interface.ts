export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Main {
    temp: number
    pressure: number
    humidity: number
}

export interface WeatherData {
    id: string
    weather: Weather[]
    main: Main
    name: string
}

export interface Location {
    city: string
    country: string
}
