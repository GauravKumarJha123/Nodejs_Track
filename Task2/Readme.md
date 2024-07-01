# Node.js Event Loop Demonstration

## Overview
This project demonstrates the non-blocking I/O model of Node.js and how the event loop handles CPU-intensive as well as I/O-based operations.

### Setup and Run
- Clone this repository.
- Run `npm install` to install any dependencies (none needed for the current setup).
- Execute `npm start` to start the server.

### Testing
- Once the server is running, open a browser and navigate to `localhost:3000/io-operation` to see the immediate response of an I/O-bound operation.
- Next, navigate to `localhost:3000/cpu-intensive` to simulate a CPU-bound operation. Notice the delay in response, showcasing the blocking nature of CPU tasks.

## Conclusions
Through this experimentation, we observe that CPU-intensive tasks can block the Node.js event loop causing delays in processing other requests. On the other hand, asynchronous I/O tasks do not block the event loop allowing the server to continue handling other operations.