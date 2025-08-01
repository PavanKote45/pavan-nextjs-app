'use client';

import { useEffect, useState } from 'react';

export default function HelloMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Failed to fetch message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h2>Message from API:</h2>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}