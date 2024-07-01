const redis = require('redis');
const util = require('util');

// Simulate a database query
const mockDatabaseQuery = async (key) => {
    console.log('Querying the database...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Database value for ${key}`);
        }, 2000); // Simulate a 2-second database query
    });
};

// Create a Redis client
const client = redis.createClient();

// Promisify Redis client methods for async/await
client.get = util.promisify(client.get);
client.set = util.promisify(client.set);

client.on('error', (err) => {
    console.error(`Error: ${err}`);
});

// Function to get data with Redis caching
const getData = async (key) => {
    try {
        // Try to get data from Redis cache
        const cachedValue = await client.get(key);
        if (cachedValue) {
            console.log('Cache hit');
            return cachedValue;
        }

        // If not in cache, query the database
        console.log('Cache miss');
        const dbValue = await mockDatabaseQuery(key);

        // Store the result in Redis cache with an expiry time of 10 seconds
        await client.set(key, dbValue, 'EX', 10);
        return dbValue;
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

// Connect to Redis server and fetch data
client.on('connect', async () => {
    console.log('Connected to Redis...');
    
    // Fetch data for the first time (should query the database)
    let value = await getData('myKey');
    console.log(`Value: ${value}`);
    
    // Fetch data again (should hit the cache)
    value = await getData('myKey');
    console.log(`Value: ${value}`);

    // Close the Redis client
    client.quit();
});

console.log('Attempting to connect to Redis...');
