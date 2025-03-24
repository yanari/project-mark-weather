import { getColorByTemperature } from '@/hooks/useWeather'
import { WeatherData } from '@/hooks/useWeather/weather.interface'
import { formatDistance } from 'date-fns'
import { Droplets, Gauge } from 'lucide-react'
import { ReactNode } from 'react'

interface WeatherCardProps {
    data: WeatherData
}

export default function WeatherCard({ data }: WeatherCardProps) {
    const { main, name, weather, sys, lastUpdatedAt } = data
    const { icon, description } = weather[0]
    const temperature = Math.floor(main.temp)
    const country = sys.country
    console.log(lastUpdatedAt)

    const updatedAt = formatDistance(lastUpdatedAt, Date.now());

    const color = getColorByTemperature(temperature)

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="mb-3 py-2 px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-800">
                            {name}, {country}
                        </h2>
                    </div>
                    <div>
                        <img
                            className='w-16 h-16'
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt={description}
                        />
                    </div>
                </div>
                <div className="flex items-end mb-4 justify-between">
                    <span className={`text-5xl font-bold ${color}`}>
                        {temperature}°C
                    </span>
                    <span className="text-gray-500 ml-2 pb-1 capitalize">{description}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <WeatherDetail
                        name="Humidity"
                        value={`${main.humidity}%`}
                        icon={<Gauge />}
                    />
                    <WeatherDetail
                        name="Pressure"
                        value={`${main.pressure} hPa`}
                        icon={<Droplets />}
                    />
                </div>
            </div>

            <div className="bg-slate-100 py-2 px-4 text-sm text-slate-700">
                <span className=''>Last updated: {updatedAt}</span>
            </div>
        </div>
    )
}

interface WeatherDetailProps {
    name: string
    value: string
    icon: ReactNode
}

function WeatherDetail({ name, value, icon }: WeatherDetailProps) {
    return (
        <div className="flex items-center bg-slate-100 rounded-lg px-4 py-1">
            <span className="text-slate-400 mr-4">
                {icon}
            </span>
            <div>
                <p className="text-gray-500 text-sm">{name}</p>
                <p className="font-semibold">{value}</p>
            </div>
        </div>
    )
}
