const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId to ensure it is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to fetch user details using the validated userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});