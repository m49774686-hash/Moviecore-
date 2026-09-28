# MovieCore

Fresh Node.js backend for TMDB ingestion plus an ENV-based external scraper adapter.

## Flow
TMDB discovery -> full details -> TV seasons/episodes -> complete item -> external scraper -> PostgreSQL.

MovieCore does not implement browser/provider scraping, Playwright/Puppeteer, Torrentio, or copied MovieZone scraping logic.

## Setup
npm install
cp .env.example .env
npm start

Required ENV: DATABASE_URL, TMDB_API_KEY, SCRAPER_URL.

The deployed scraper's exact HTTP contract is intentionally not guessed. The adapter is isolated in `src/scraper/externalScraper.js` and must be mapped to the actual deployed contract before production use.
