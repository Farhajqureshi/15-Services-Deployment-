import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setStatus('Connected');
      })
      .catch(err => setStatus('Error: ' + err.message));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Multi-Service Docker Stack</h1>
      <p>Status: {status}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;