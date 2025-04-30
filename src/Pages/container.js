import { useState, useEffect, useCallback } from 'react';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=1';
const API_KEY = 'live_RPszwynyobc78VkkoTOGgyehUl6Phc4WAYZIdRySPTggduqjq2oE2ggQ77bSoFW0';

const useHome = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const getCat = useCallback(async () => {
    if (!enabled) return;
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        headers: { 'x-api-key': API_KEY },
      });
      const data = await res.json();
      setCatUrl(data[0].url);
    } catch (err) {
      console.error('Failed to fetch cat:', err);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    let interval;
    if (enabled && autoRefresh) {
      getCat();
      interval = setInterval(getCat, 5000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh, enabled, getCat]);

  return {
    enabled,
    setEnabled,
    autoRefresh,
    setAutoRefresh,
    catUrl,
    loading,
    getCat
  };
};

export default useHome;
