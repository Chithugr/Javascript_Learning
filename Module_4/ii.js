// function fn(){return 4+5;
//    }
// fn(3,7);

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//  myPromise().then(res => console.log(res));
//  console.log('second');
// }

// async function secondFunction() {
//  console.log(await myPromise());
//  console.log('second');
// }

// firstFunction();
// secondFunction();




const os=require("os")

// console.log(os.arch())
// console.log(os.networkInterfaces())
// console.log(os.platform())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())