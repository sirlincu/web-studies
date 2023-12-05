import { serverInfo } from './monitor.js';

const port = 5000;

server.get('/', (req, res) => {
    res.json({ message: 'Server Running!' });

    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});