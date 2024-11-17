import React from 'react';
import ProductCard from '../components/productCard';
import styles from '../styles/home.module.css'; // Import external CSS

const Home: React.FC = () => {
  // Hardcoded metrics data
  const metrics = [
    { title: 'Market Cap', value: '$10,000,000', image: '/path/to/image1.jpg', rating: 5 },
    { title: 'Token Price', value: '$1.50', image: '/path/to/image2.jpg', rating: 5 },
    { title: 'Total Supply', value: '10,000,000 Tokens', image: '/path/to/image3.jpg', rating: 5 },
    { title: 'Staked Tokens', value: '8,500,000 Tokens', image: '/path/to/image4.jpg', rating: 5 },
    { title: 'Reward Rate', value: '10% APR', image: '/path/to/image5.jpg', rating: 5 },
    { title: 'Daily Volume', value: '$500,000', image: '/path/to/image6.jpg', rating: 4 },
    { title: 'Holders', value: '15,000', image: '/path/to/image7.jpg', rating: 4 },
    { title: 'Liquidity', value: '$2,000,000', image: '/path/to/image8.jpg', rating: 4 },
    { title: '24h Change', value: '+2.5%', image: '/path/to/image9.jpg', rating: 4 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <ProductCard
            key={index}
            title={metric.title}
            price={metric.value}
            image={metric.image}
            rating={metric.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
