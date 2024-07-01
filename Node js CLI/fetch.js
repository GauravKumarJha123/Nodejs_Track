const axios = require('axios');
require('dotenv').config();
const token = process.env.GITHUB_TOKEN;

// `process.argv` contains an array of the command line arguments.
// The first two elements are 'node' and the filename.
// So the third element (index 2) is the first actual command-line argument.
const username = process.argv[2];

function fetchGitHubUser(username) {
  const githubEndpoint = `https://api.github.com/users/${username}`;
  axios.get(githubEndpoint, { headers: { 'Authorization': `token ${token}` } })
// ...
  axios.get(githubEndpoint)
    .then(response => {
      console.log(response.data); // This will be changed to formatted output soon.
    })
    .catch(error => {
      console.error('Error fetching GitHub user:', error.message);
    });
}

// Invoke the function only if there is a username argument.
if (username) {
  fetchGitHubUser(username);
} else {
  console.log('Please provide a GitHub username.');
}