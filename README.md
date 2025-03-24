# Weather App - FrontEnd Challenge ProjectMark

## 📌 Overview

This project is a weather application built for the **FrontEnd Challenge ProjectMark**. It displays real-time weather conditions for three cities: **Joinville (Brazil), San Francisco (USA), and Urubici (Brazil)**. The data is fetched from the **OpenWeatherMap API** and updates automatically every **10 minutes**.

## ✨ Features

- **Current Temperature** (in Celsius) with color-coded indicators:
  - **Blue**: 5°C or below
  - **Orange**: Between 5°C and 25°C
  - **Red**: Above 25°C
- **Humidity** (percentage)
- **Pressure**
- **Automatic data updates every 10 minutes**
- Built with **semantic HTML** and modern CSS (Tailwind CSS)
- Developed using **Next.js** with **React Query** for data fetching

## 🛠 Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- API Key from [OpenWeatherMap](https://openweathermap.org/)

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yanari/project-mark-weather.git
   cd project-mark-weather
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Create an **`.env`** file** and add your OpenWeatherMap API key:
   ```plaintext
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. **Run the application:**
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`

## 🧑‍💻 Technologies Used

- **Frontend Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data Fetching:** React Query
- **Date Formatting:** date-fns
- **Linting:** ESLint
- **API:** OpenWeatherMap

## 🔍 Code Quality & Best Practices

- ✅ **Semantic HTML** for accessibility and SEO
- ✅ **Component-based architecture** for reusability
- ✅ **Consistent styling** using Tailwind CSS
- ✅ **Usability-focused UI** with responsive design
- ✅ **Easy maintenance** with modular and well-documented code
- ✅ **Linting and formatting enforced with ESLint**


## 📝 License

This project is licensed under the MIT License.

---

👩‍💻 **Developed by Marcelle Yanari**

