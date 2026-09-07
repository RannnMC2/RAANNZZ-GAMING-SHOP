// Simple Express API starter for RAANNZZ Gaming Shop
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'raannzz-backend' });
});

// Example listings endpoint (stubbed)
let sampleListings = [
  {
    id: 1,
    title: 'Akun Mobile Legends - Legend Rank, Skin Eksklusif',
    game: 'Mobile Legends',
    price_cents: 1500000,
    currency: 'IDR',
    seller_id: 100
  }
];

app.get('/api/listings', (req, res) => {
  res.json({ data: sampleListings });
});

// Create listing (TODO: auth middleware)
app.post('/api/listings', (req, res) => {
  // In production: validate input, require auth, save to DB
  const payload = req.body;
  const newListing = Object.assign({ id: Date.now() }, payload);
  sampleListings.push(newListing);
  res.status(201).json({ data: newListing });
});

app.listen(PORT, () => {
  console.log(`raannzz-backend running on port ${PORT}`);
});
