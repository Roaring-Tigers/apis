

// you are trying to do a particular task =>



// let a
// setTimeout(()=>{a = 10; console.log(a)} , 5000)


// if(a ==10){
//     console.log("a is 10")
// }
// else{
//     console.log("a is not 10")
// }



// let promise = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("done"), 5000)
//     // setTimeout(()=> reject("failed"), 5000)
// })


// new Promise((resolve, reject)=>{})


// let a = promise


// then()  , catch() 


let promise =  new Promise((resolve, reject)=>{
     setTimeout(()=> reject("failed"), 2000)
})

console.log(promise)

promise.then(response => console.log("Success",response))
promise.catch(error => console.log("Error",error))
