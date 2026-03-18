import { useState, useEffect } from "react";

export function useExchangeRates(baseCurrency) {
  const [rates, setRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!baseCurrency) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`https://api.frankfurter.app/latest?base=${baseCurrency}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener tasas");
        return res.json();
      })
      .then((data) => {
        const allRates = { [data.base]: 1, ...data.rates };
        setRates(allRates);
        setCurrencies(Object.keys(allRates).sort());
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [baseCurrency]);

  return { rates, currencies, loading, error };
}
