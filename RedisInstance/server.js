const express = require('express');
const client = require('./client');
const axios = require('axios').default;

const app = express();

app.get('/', async (req, res) => {
    try {
        const cachedValue = await client.get('todos');
        if (cachedValue) return res.json(JSON.parse(cachedValue));

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

        await client.set('todos', JSON.stringify(data));
        await client.expire('todos', 30);
        
        return res.json(data);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(4568, () => {
    console.log('Server is running on port 4568');
});
