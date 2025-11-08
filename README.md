# 🎬 Cinefy – Movie & TV Discovery SPA

Cinefy is a sleek Single Page Application (SPA) to browse, search, and explore movies and TV shows using **The Movie Database (TMDB) API**.  
It delivers a smooth browsing experience with trailers, cast info, similar titles and more — all without page reloads.

---

## ⭐ Problem Statement

Movie fans often shuffle between IMDb, streaming apps, and Google to find information about movies and shows.  
This app provides a **centralized platform** where users can:

- 🔍 Search movies and TV shows instantly
- 🎞️ Browse trending, top-rated, and upcoming content
- 📖 View detailed info (cast, genres, overview, ratings)
- 🎥 Watch official trailers
- 🚀 Navigate seamlessly in an SPA interface

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| Trending, Top Rated & Upcoming Lists | Browse curated media collections |
| Search with Category Toggle | Search movies & TV shows |
| Detailed Media Page | Poster, overview, genres, cast & crew |
| Trailers | Embedded YouTube trailers |
| Similar Recommendations | Suggests related movies/TV shows |
| Responsive | Works on desktop and mobile |
| Graceful Error Handling | Handles missing data / API failures |
| Planned | Favorites, Login, Live Search Suggestions |

---

## 🧰 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | **React.js** (SPA) |
| Routing | React Router DOM |
| Styling | SCSS, Boxicons, Swiper.js |
| Backend Proxy | Node.js + Express |
| API Source | TMDB API |
| HTTP Client | Axios |
| Version Control | Git + GitHub |

---

## 🔗 API Endpoints (via Express Proxy)

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/tmdb/test` | GET | Verify TMDB connection |
| `/api/tmdb/:category/:type` | GET | Fetch lists (e.g., trending, popular) |
| `/api/tmdb/search/:category?query=` | GET | Search movies/TV shows |
| `/api/tmdb/:category/:id` | GET | Get details of a movie/TV |
| `/api/tmdb/:category/:id/credits` | GET | Cast & crew |
| `/api/tmdb/:category/:id/videos` | GET | Trailers (YouTube) |
| `/api/tmdb/:category/:id/similar` | GET | Similar titles |

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Project
```bash
git clone <your-repo-link>
cd movie-app
```
### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create a .env file inside /server:

TMDB_API_KEY=your_tmdb_api_key
PORT=5000

Start backend:

npx nodemon server.js

### 3️⃣ Frontend Setup
```bash
cd ../src
npm install
npm start
```

The app will run at:

http://localhost:3000

### 📂 Folder Structure
```bash
movie-app/
├── server/                  # Backend (Express Proxy)
│   ├── routes/tmdb.js
│   ├── .env
│   └── server.js
│
├── src/                     # Frontend (React SPA)
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── scss/
│   ├── App.jsx
│   └── index.js
│
├── public/
│   └── index.html
└── README.md
```
