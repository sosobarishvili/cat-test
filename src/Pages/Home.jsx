import React, { useState, useEffect, useCallback } from 'react';
import styles from './Home.module.css';
import Checkbox from '../components/Checkbox/Checkbox';
import GetImage from '../components/GetImage/GetImage';
import useHome from './container';



function Home() {

  const {
    enabled,
    setEnabled,
    autoRefresh,
    setAutoRefresh,
    catUrl,
    loading,
    getCat
  } = useHome();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <Checkbox label="Enabled" checked={enabled} onChange={setEnabled} />
          <Checkbox label="Auto-refresh every 5 second" checked={autoRefresh} onChange={setAutoRefresh} disabled={!enabled} />
          <button onClick={getCat} disabled={!enabled} className={styles.button}>
            Get cat
          </button>
        </div>

        {loading ? <p>Loading...</p> : <GetImage src={catUrl} />}
      </div>
    </div>

  );
}

export default Home;
