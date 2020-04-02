'use strict';

//Backend 
const backend = (num) => {
    let newProm = new Promise((resolve,reject) => {
        if(num % 2 === 0){
            resolve(`${num} is even.`)
        } else {
            reject(`${num} is odd.`)
        }
    });
    return newProm;
};



//builtInFuncs 
const builtIn = (num) => {
    let even = backend(num);
    console.log(even);
    let odd = backend(num).catch((error) => {
        console.log(odd);
    });
}
builtIn(10)


async & await
const asyncAwait = async () => {
    const even = await backend(10);
    console.log(even);
    const odd = await backend(5).catch((odd) => {
        console.log(odd);
    })
}

asyncAwait()







