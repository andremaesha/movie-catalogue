const CONFIG = {
    // API
    KEY: '424f1b3530d83d678a592936337c563f',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',

    // serviceWorker
    CACHE_NAME: new Date().toISOString(),

    // IDB
    DATABASE_NAME: 'movie-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'movies',

    // WebSocket
    WEB_SOCKET_SERVER: "wss://stormy-badlands-06326.herokuapp.com",
};

export default CONFIG;