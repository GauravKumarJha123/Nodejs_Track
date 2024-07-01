function main(n , callback){
    if(typeof callback !== 'function'){
        throw new TypeError(`Callback may not be a function, Got: ${typeof callback}`);
    }

setTimeout(() => {
    if(typeof n !== 'number'){
        callback(new TypeError(`Expected number but got ${typeof  n}`));
        return;
    }
    const reult = n * n;
    callback(null, result);
}, 1000 );

}

module.exports = { main}