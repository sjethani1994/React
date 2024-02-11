import React from 'react';
import styles from '../Main/style.module.css'; // Import CSS module

function ProductList({ product }) {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>Price: ${product.price}</p>
        {/* Add more details if needed */}
      </div>
    </div>
  );
}

export default ProductList;
