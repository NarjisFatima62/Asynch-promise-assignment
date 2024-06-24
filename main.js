"use strict";
//Question No:1
//Answer:
// let fetchGreeting = new Promise((resolve) =>{
//     setTimeout(()=>{resolve("hello world")
// }, 2000)})
// .then((res)=>{
//     console.log(res);
// })
//Question No:2
//Answer:
// let simulateTask=()=>{
//     console.log("task started");
//     setTimeout(() => {
//         console.log("task completed");
//     },1000)
// }
// simulateTask()
//Question No:3
//Answer:
// let fetchData=(): Promise <string> =>{
// return new Promise((resolve) => {
// setTimeout(() =>{
//     resolve("Data fetched successfully")
// },1000)
// });
// }
// fetchData().then((reslove) => {
//     console.log(reslove);
// })
//Question No: 4
//Answer:
// let fetchWithError = (): Promise<string> =>{
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             let fetchData=(Math.random())  > 0.5;
//             if(fetchData){
//                 resolve("Data fetched successfully")
//             }else{
//                 reject("Data fetched failed")
//             }
//         },1000)
//     })
// }
// fetchWithError().then((res) =>{
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej);
// })
//Question No:5
//Answer:
let fetchData1 = () => {
    return new Promise((resolve) => {
        resolve("Data fetched successfully");
    });
};
let proceData = () => {
    return new Promise((resolve) => {
        resolve("processed data successfully");
    });
};
let executeSequentially = () => {
    fetchData1().then((res) => {
        console.log(res);
    });
    proceData().then((res) => {
        console.log(res);
    });
};
executeSequentially();
