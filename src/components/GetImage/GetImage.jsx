import React from 'react';
import styles from './GetImage.module.css';

function GetImage({ src }) {
  if (!src) return null;
  return <img src={src} alt="A random cat" className={styles.image} />;
}

export default GetImage;
