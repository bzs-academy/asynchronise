//let resultArr = [];



/* let functin2 = () => {
    resultArr.push('Hello ');
}

setTimeout(functin2,2000);

let functin3 = () => {
    resultArr.push(' :)');
}

setTimeout(functin3,5000);


functin1();
functin2();
functin3();


console.log(resultArr);

setTimeout(()=>{
    console.log(resultArr);
},6000);

let newFunc = async () => {

}

async function newF2(){

} */

let myWrapFunc = async ()=>{

let myVar = 0;

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(myVar+=1)},5000);
});

let myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(myVar+=2)},9000);
});

let myPromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(myVar+=3)},2000);
});

let myFunc = async () => {
    await myPromise.then(result=>console.log(result));
    await myPromise2.then(result=>console.log(result));
    await myPromise3.then(result=>console.log(result));
    console.log('done');
}

await myFunc(); 


let myFunc2 = async () => {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=1))},3000);
    });
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=2))},4000);
    });
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=3))},2000);
    });
    console.log('done');
}

await myFunc2();

}


myWrapFunc();
