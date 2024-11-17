// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>{price}</p>
      <div style={styles.rating}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '90%', // Use percentage for responsiveness
    maxWidth: '20rem', // Limit the maximum width to keep cards uniform
    height: '10rem',
    padding: '1rem',
    margin: '0.5rem',
    border: '0.1rem solid #ddd',
    borderRadius: '0.5rem',
    textAlign: 'center' as const,
    boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    margin: '0.5rem 0',
  },
  price: {
    fontSize: '1.2rem', // Slightly smaller for price text
    color: '#b12704',
    fontWeight: 'bold' as const,
  },
  rating: {
    fontSize: '0.875rem',
    color: '#ffa41c',
    marginBottom: '0.5rem',
  },
};

export default ProductCard;
