const express = require('express');
const app = express();

//
app.use(express.json());

// 
app.use(express.static('public'));

// 
let readings = [];

// 
app.post('/api/readings', (req, res) => {
  const newReading = req.body;
  readings.push(newReading);
  
  // 
  if (readings.length > 50) {
    readings.shift();
  }
  
  res.status(201).json({ success: true, data: newReading });
});

// 
app.get('/api/readings', (req, res) => {
  res.json(readings);
});

// 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});