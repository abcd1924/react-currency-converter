import React, { useState, useMemo } from "react";
import "./App.css";

const currencies = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
};

export default function CurrencyConverter() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState(Object.keys(currencies)[0]);
  const [toCurrency, setToCurrency] = useState(Object.keys(currencies)[1]);

  const conversionRates = useMemo(() => {
    console.log("Calculating base...");
    const baseAmount = (Number(amount) || 0) / currencies[fromCurrency];
    const amounts = {};
    Object.keys(currencies).forEach(currency => {
      amounts[currency] = (baseAmount * currencies[currency]).toFixed(2);
    })

    return amounts;
  }, [amount, fromCurrency]);

  const finalAmount = conversionRates[toCurrency]

  return (
    <div className="container">
      <div className="converter-card">
        <h1 className="title">Currency Converter</h1>

        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            className="amount-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="select-container">
          <div className="select-group">
            <label>From</label>
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>

          <div className="swap-icon">⇄</div>

          <div className="select-group">
            <label>To</label>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
              {Object.keys(currencies).map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-area">
          <p className="result-label">Converted Amount</p>
          <span className="result-value">{finalAmount} {toCurrency}</span>
        </div>
      </div>
    </div>
  );
}