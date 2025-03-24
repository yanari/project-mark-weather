import { WeatherData } from '@/shared/interfaces/weather.interface'

interface WeatherCardProps {
    data: WeatherData
}

export default function WeatherCard({ data }: WeatherCardProps) {
    const { main, name, weather } = data
    const iconCode = weather[0].icon
    const temperature = Math.floor(main.temp)

    console.log(data)
    return (
        <div className="bg-white rounded-lg shadow-md py-2 px-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className='text-2xl font-semibold text-slate-800'>{name}</h2>
                    <p className='text-slate-500'>Santa Catarina, Brasil</p>
                </div>
                <div>
                    <img
                        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                    />
                </div>
            </div>
            <div className="flex items-end mb-6">
                    <span className="text-5xl font-bold text-orange-500">
                        {temperature}°C
                    </span>
                    <span className="text-gray-500 ml-2 pb-1">
                        Partly Cloudy
                    </span>
                </div>
        </div>
    )
}
