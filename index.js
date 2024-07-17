
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);

// }
// function x(){

//     var a = 5;
//     return function y(){
//         console.log(a);
//     }
    
// }
// x()();

// const cart = ["t-shirt","pant", "skirt"];

// createOrder(cart)
//  .then((orderId) => {
//      console.log(orderId);
//      return orderId;
//  })

// .then((orderId) => proceedToPayment(orderId))

// .then((orderStatus) => showOrderSummary(orderStatus))

// .then((orderHistory) => updateWallet(orderHistory))

// .then((walletInfo) => {
//     console.log(walletInfo);

// })

// .catch ((err) => {
//     console.log(err.message); // for handling the error accurate
// });


// function createOrder(cart) {
//     const pr = new Promise(function(resolve, reject){
//         if(!validateCart(cart)) {
//             const  err = new Error("cart is not valid");
//             reject(err);
//         }

//         //Sucessful or Resolve

//         //logic for createOrder

//         const orderId = '12345';
//         if(orderId) {
//             resolve(orderId);
//         }

//     });

//     return pr;
// }

// function proceedToPayment(orderId) {

//     return new Promise(function(resolve,reject){     //constructor 
//         resolve("payment is sucessful");
//     });
// }

// function showOrderSummary(orderStatus) {
//     return new Promise(function(resolve,reject){     //constructor 
//         resolve("sucessful");
//     });
// }

// function updateWallet(orderHistory) {
//     return new Promise(function(resolve,reject){     //constructor 
//         reject("not updated");
//     });
// }



// function validateCart(cart) {
//     return false;
// }

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 failed"), 6000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 failed"), 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3 failed"), 3000);
})

Promise.any([p1, p2, p3])
.then(res => {
    console.log(res);
})
.catch(err => {
    console.error(err);
    
})


