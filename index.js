const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/welcome', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.json({ message: `Welcome, ${name}!` });
  } else {
    res.status(400).json({ message: 'Name is required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
