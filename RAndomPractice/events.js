const EventEmmiter = require('events');
const { resolve } = require('path');
const eventEmitter = new EventEmmiter();

const t = 1000;

eventEmitter.on('syncEvent', (message)=> {
    console.log(`Called ${message}`);
    const startTime = Date.now();
    while(Date.now() - startTime < 2000){
   
    }
    var time = Date.now() - startTime;
    console.log(`blocking the call stack for ${time}`);
    console.log(`Blocking thread finished procedd to the call stack`);
});

eventEmitter.on('asyncEvent', async (msg, t) => {
    await new Promise ( resolve => setTimeout(resolve , t))
        console.log(`Called ${msg} from setTimeout after ${t}`);
    }
);

console.log('Before Sync Event');
eventEmitter.emit('syncEvent', 'message for the event');
eventEmitter.emit('asyncEvent', 'message from async Event' , 3000);
console.log('After Sync Event');