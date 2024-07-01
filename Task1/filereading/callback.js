const https = require('https');

function fetchDataWithCallback(callback) {
    https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            callback(null, JSON.parse(data));
        });
    }).on('error', (error) => {
        callback(error, null);
    });
}

// Usage
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});
