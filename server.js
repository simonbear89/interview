const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});

const searchResults = [
  'code snippet',
  'availability',
  'table',
  'Email tracking',
  'Giphy',
  'PDF Slideshow',
  'Article',
  'SMS Me',
  'Secret Message',
  'Encryption',
  'Poll',
  'Public Poll',
  'Send Later',
  'Send Later with tracking',
  'Markdown',
  'Link Preview',
  'Yes/No',
  'Question and Answer',
  'Forms in Email',
  'Email forums',
  'Cloud hosted attachments',
  'Email templates',
  'Gists',
  'Google Maps integration'
];

// Algorithms:
// 1. Starts with query.
// 2. Any word starts with query.
// 3. Any word starts with all space-separated query.
app.post('/search', function(req, res) {
  return res.json([]);
});

app.listen(process.env.PORT || 3000);
