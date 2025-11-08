Movie App – Movie & TV Discovery SPA

A Single Page Application (SPA) to browse, search, and view details of movies and TV shows using The Movie Database (TMDB) API. The app allows users to explore trending, top-rated, and upcoming media with detailed info including posters, overview, genres, cast, and trailers.

Problem Statement

Movie enthusiasts often waste time switching between IMDb, Rotten Tomatoes, and streaming platforms to get movie details. This app aims to provide a centralized interface for:

Searching movies and TV shows

Browsing trending, top-rated, and upcoming titles

Viewing detailed information (poster, overview, genres, casts, trailers)

Navigating seamlessly without page reloads


Features

Trending / Top Rated / Upcoming Media Lists (Movies & TV Shows)

Search by title (movie or TV)

Movie/TV Details Page: poster, title, overview, genres, cast, trailers, similar items

Responsive UI for mobile and desktop

Error Handling for API failures or no results

Planned Features: Favorites list, user authentication, live search suggestions.

Tech Stack

Frontend: React.js (SPA)
Routing: React Router DOM
API: TMDB API via Express proxy
Styling: SCSS + Boxicons + Swiper.js
State Management: React Hooks, localStorage (planned for Favorites)
HTTP Client: Axios
Backend (Proxy): Node.js + Express
Version Control: GitHub

Wireframes / Screens

Home Page: HeroSlide + MovieList sections (Trending, Top Rated, Upcoming)

Catalog / Search: Grid of search results via MovieGrid

Detail Page: Poster/backdrop, title, overview, genres, top cast, trailers, similar items

Navigation: Header with Home, Catalog (and future Favorites)

API Endpoints

The backend acts as a proxy to TMDB API.

Endpoint	Method	Description
/api/tmdb/test	GET	Test TMDB connection
/api/tmdb/:category/:type	GET	Fetch movies/TV lists (e.g., /api/tmdb/movie/popular)
/api/tmdb/search/:category	GET	Search titles by name (e.g., /api/tmdb/search/movie?query=Inception)
/api/tmdb/:category/:id	GET	Fetch details for a movie/TV show
/api/tmdb/:category/:id/credits	GET	Fetch cast/crew for a movie/TV show
/api/tmdb/:category/:id/videos	GET	Fetch trailers (YouTube)
/api/tmdb/:category/:id/similar	GET	Fetch similar movies/TV shows
Setup Instructions

Clone the repository:

git clone <your-repo-link>
cd movie-app


Install backend dependencies:

cd server
npm install


Create .env file in /server with:

TMDB_API_KEY=your_tmdb_api_key
PORT=5000


Start backend server:

npx nodemon server.js


Install frontend dependencies:

cd ../src
npm install
npm start


Access app at http://localhost:3000.

Folder Structure
movie-app/
├── server/                  # Backend
│   ├── routes/tmdb.js       # TMDB API proxy
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── server.js            # Express server setup
│
├── src/                     # Frontend
│   ├── api/                 # Axios & API methods
│   ├── components/          # UI components (Header, Footer, MovieCard, MovieGrid, HeroSlide, etc.)
│   ├── pages/               # Home, Catalog, Detail pages
│   ├── scss/                # SCSS variables, breakpoints, index
│   ├── App.jsx
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md
