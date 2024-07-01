const https = require('https');

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

// Usage
fetchDataWithPromise()
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
