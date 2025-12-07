const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
  res.json({
    status: 'healthy',
    services: {
      backend: 'running',
      timestamp: new Date().toISOString()
    }
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
  ]);
});

app.listen(8000, '0.0.0.0', () => {
  console.log('Backend running on port 8000');
});