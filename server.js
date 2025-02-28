  const express = require('express');
  const app = express();
  const path = require('path');

  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, 'public')));

  // Define a route to serve the 'Hello World' page
  app.get('/hello', (req, res) => {
    res.send('Hello World');
  });

  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
