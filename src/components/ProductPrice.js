'use client'; // if using Next.js App Router //Jordan Was here

import { useEffect, useState } from 'react';
import { getExchangeRate } from '../utils/getExchangeRate';

const zarFormatter = new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function ProductPrice({ priceInUSD }) {
  const [priceZAR, setPriceZAR] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const rate = await getExchangeRate();
        const converted = priceInUSD * rate;
        setPriceZAR(zarFormatter.format(converted));
      } catch (err) {
        console.error('Currency conversion failed:', err);
      }
    };

    fetchRate();
  }, [priceInUSD]);

  if (!priceZAR) return <p>Loading price...</p>;

  return <p>{priceZAR}</p>;
}
