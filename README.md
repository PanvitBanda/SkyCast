# 🌤️ SkyCast – Real-Time Weather App

**SkyCast** is a sleek, responsive weather app that fetches real-time weather data using the **OpenWeatherMap API**. It offers location-based and city-based weather results, light/dark mode, recent search history, and dynamic backgrounds that change based on the weather.

---

## 🚀 Features

- 📍 **Geolocation Support** – Detect and show your weather automatically.
- 🔍 **City Search** – Manually search for any city in the world.
- 🌗 **Light & Dark Mode** – Toggle between day and night themes.
- 🧠 **Search History** – Saves your recent searches using `localStorage`.
- 🖼️ **Dynamic Backgrounds** – Background image updates based on weather condition.
- 📱 **Responsive Design** – Works across mobile, tablet, and desktop.

---

## 📁 Folder Structure
```
SkyCast/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
        ├── clear.jpg
        ├── cloudy.jpg
        ├── rainy.jpg
        ├── snow.jpg
        ├── storm.jpg
        ├── fog.jpg
        └── sunny.jpg
```

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** with variables and media queries
- **JavaScript (ES6)**
- **OpenWeatherMap API** for real-time data

---

## 🔧 Getting Started

### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/SkyCast.git
cd SkyCast
```

### 2. Replace the API Key
Open `script.js` and replace:
```js
const apiKey = 'YOUR_API_KEY';
```
with your key from [OpenWeatherMap](https://openweathermap.org/api).

### 3. Open `index.html` in your browser:
Just double-click it, or right-click → Open with Live Server if using VS Code.

---

## 🌦️ Example Weather Background Mapping

| Weather Condition       | Background Image  |
|-------------------------|-------------------|
| clear sky               | clear.jpg          |
| overcast clouds         | cloudy.jpg         |
| light rain / heavy rain | rainy.jpg          |
| thunderstorm            | storm.jpg          |
| snow                    | snow.jpg           |
| fog / mist / haze       | fog.jpg            |
| fallback                | sunny.jpg          |

---

## 📸 Preview

![SkyCast Screenshot](assets/images/clear.jpg)

---
## 🌤️ SkyCast Previews

### 🧑‍💻 Code Overview
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/1c248edb-31de-4815-9425-eb7ddfd697e8" />

### 🏠 🌤️ SkyCast Webpage
<img width="1870" height="928" alt="image" src="https://github.com/user-attachments/assets/159ae7ab-4afa-405e-a582-8a3dd48aec77" />

---

## 📌 Future Improvements

- ✅ Auto-refresh every X minutes
- 🔔 Weather alerts (if available)
- 🗓️ 5-day forecast view
- 🌍 Country selection dropdown
- 📦 Deploy to GitHub Pages

---

## 👨‍💻 Author

**Panvit Banda**
🎓 B.Tech Final Year Student | Web & AI Enthusiast
📬 [LinkedIn](https://www.linkedin.com/in/panvit-banda/)
💻 [GitHub](https://github.com/PanvitBanda)

---

## 📄 License

This project is open-source and available under the [MIT License](./SkyCast/LICENSE).

---
