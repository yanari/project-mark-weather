import WeatherDashboard from '@/components/WeatherDashboard'

export default function Home() {
    return (
        <div className="p-8 font-sans min-h-lvh flex flex-col">
            <header className="mb-6">
                <h1 className="text-4xl font-bold text-slate-800 mb-1">
                    Weather Dashboard
                </h1>
                <p>Real-time weather conditions for selected cities</p>
            </header>
            <main>
                <WeatherDashboard />
            </main>
            <footer className="mt-auto text-center text-gray-600">
                <p>
                    Data updates every 10 minutes • Powered by OpenWeatherMap
                </p>
            </footer>
        </div>
    )
}
