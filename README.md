# 💱 React Currency Converter

**Live Demo:** https://abcd1924.github.io/react-currency-converter/

A lightweight currency converter built with React using real-time exchange rates. Developed as part of the freeCodeCamp curriculum and enhanced with live API integration.

## Features
* Real-time conversion between 30+ currencies using live ECB rates
* Currency swap functionality (⇄ button)
* Loading and error states for API reliability
* Responsive design with dynamic currency selection

## API & Architecture
This converter uses the [Frankfurter API](https://www.frankfurter.dev/) to fetch real exchange rates from the European Central Bank (updated daily).

**Key implementation details:**
- Custom `useExchangeRates` hook manages API integration and state management
- Dynamic currency list populated from API response
- AbortController prevents race conditions when switching base currencies
- useMemo optimizes conversion calculations to prevent unnecessary re-renders

## Tech Stack
- Library: React
- State Management: useState, Custom Hooks
- Optimization: useMemo, AbortController
- API: Frankfurter (ECB Exchange Rates)
- Styling: CSS3 / HTML5

## How to run
1. Clone the repo: `git clone https://github.com/abcd1924/react-currency-converter`
2. Install dependencies: `npm install`
3. Start the dev server: `npm start`
4. Open http://localhost:5173/react-currency-converter/ in your browser