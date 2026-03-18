import React, { useState, useMemo } from "react";
import "./App.css";
import { useExchangeRates } from "./hooks/useExhangeRates";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const { rates, currencies, loading, error } = useExchangeRates(fromCurrency);

  const convertedAmount = useMemo(() => {
    if (!rates[toCurrency]) return null;
    return (Number(amount) * rates[toCurrency]).toFixed(4);
  }, [amount, toCurrency, rates]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

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
            min="0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="select-container">
          <div className="select-group">
            <label>From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            className="swap-icon"
            onClick={handleSwap}
            title="Swap currencies"
          >
            ⇄
          </button>

          <div className="select-group">
            <label>To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-area">
          {loading && <p className="result-label">Cargando tasas...</p>}
          {error && (
            <p className="result-label" style={{ color: "red" }}>
              Error: {error}
            </p>
          )}
          {!loading && !error && (
            <>
              <p className="result-label">Converted Amount</p>
              <span className="result-value">
                {convertedAmount} {toCurrency}
              </span>
              <p
                style={{
                  fontSize: "0.75rem",
                  opacity: 0.6,
                  marginTop: "0.5rem",
                }}
              >
                Tasas actualizadas por el BCE · 1 {fromCurrency} ={" "}
                {rates[toCurrency]} {toCurrency}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
