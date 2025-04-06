'use client';
// utils/getExchangeRate.js
export const getExchangeRate = async () => {
    const API_KEY = 'bcd1b81ec9e0bcbf6fce9540';
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
  
    const data = await response.json();
    return data.conversion_rates.ZAR; // this gives you USD to ZAR
  };
  