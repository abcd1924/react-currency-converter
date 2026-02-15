# 💱 React Currency Converter

A lightweight currency converter built with React, developed as part of the freeCodeCamp curriculum. This project focuses on state management and performance optimization using React Hooks.

## Features
* Real-time conversion between multiple currencies (USD, EUR, GBP, JPY).
* Dynamic calculation based on base rates.
* Responsive input handling.

## Technical Implementation: Why `useMemo`?
In this specific challenge from freeCodeCamp, the use of the `useMemo` hook was mandatory. 

While the current calculation is computationally light, the implementation demonstrates how to:
1.  **Memoize expensive calculations:** Prevent recalculating the entire conversion object on every re-render unless the `amount` or `fromCurrency` changes.
2.  **Optimize performance:** Ensure that the UI remains fluid by decoupling the conversion logic from the main render cycle.

## Tech Stack
- Library: React
- State Management: useState
- Optimization: useMemo
- Styling: CSS3 / HTML5

## How to run
1. Clone the repo: git clone https://github.com/abcd1924/react-currency-converter
2. Install dependencies: npm install
3. Start the dev server: npm start