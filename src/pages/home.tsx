import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
import styles from '../styles/home.module.css';

interface Metric {
  title: string;
  value: string;
  image: string;
}

const Home: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDexScreenerData = async () => {
    try {
      // Replace with your token address
      const tokenAddress = '0x594DaaD7D77592a2b97b725A7AD59D7E188b5bFa';
      const response = await fetch(
        `https://api.dexscreener.io/latest/dex/tokens/${tokenAddress}`
      );
      const data = await response.json();

      // Extract metrics from the response
      const pairData = data.pairs[0]; // Assuming you want the first pair data
      const liveMetrics: Metric[] = [
        { title: 'Market Cap', value: `$${pairData.fdv.toLocaleString()}`, image: '/path/to/image1.jpg' },
        { title: 'Token Price', value: `$${pairData.priceUsd}`, image: '/path/to/image2.jpg' },
        { title: 'TVL', value: `$${pairData.volume.h24.toLocaleString()}`, image: '/path/to/image3.jpg' },
        { title: 'APY', value: `$${pairData.liquidity.usd.toLocaleString()}`, image: '/path/to/image4.jpg' },
        { title: 'Total Staked', value: `${pairData.priceChange.h24.toFixed(2)}%`, image: '/path/to/image5.jpg' },
        { title: 'Epoch', value: '10% APR', image: '/path/to/image5.jpg'},
        { title: 'Total Supply', value: '10,000,000 Tokens', image: '/path/to/image3.jpg' },
        { title: 'Staked Tokens', value: '8,500,000 Tokens', image: '/path/to/image4.jpg'},
        { title: 'Reward Rate', value: '10% APR', image: '/path/to/image5.jpg'},

      ];

      setMetrics(liveMetrics);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Dexscreener data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDexScreenerData();
  }, []);

  return (
    <div className={styles.container}>
      {/* Left Ad Container */}
      <div className={styles.adContainer}>
        <img src="/bg.webp" alt="Ad" className={styles.adImage} />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {loading ? (
          <p>Loading token data...</p>
        ) : (
          <div className={styles.grid}>
            {metrics.map((metric, index) => (
              <ProductCard
                key={index}
                title={metric.title}
                price={metric.value}
                image={metric.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
