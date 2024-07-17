// const cart = ["shoes", "pant", "shirt"];

// createOrder(cart, function(orderId) {

//     proceedToPayment(orderId,function(paymentInfo) {

//         showOrderSummary(paymentInfo, function() {
    
//             updateWalletBalance();
//         });
//     });

// });



// //PROMISE CHAINING

// createOrder(cart)

// .then(orderId => proceedToPayment(orderId))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(paymentInfo => updateWalletBalance(paymentInfo))
 
//create a promise
const cart = ["shoes", "pant", "shirt"];

createOrder(cart)
 .then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);    // here return is used for separate the .then in next level of chain whatever result is come from pto payment its is pass in another callback function
})

.then(function (paymentInfo) {
    console.log(paymentInfo);
})


.catch (function(err) {
    console.log(err.message);  // for handling the error accurate
});

//Producer

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)) {
            const  err = new Error("cart is not valid");
            reject(err);
        }

        //Sucessful or Resolve

        //logic for createOrder

        const orderId = '12345';
        if(orderId) {
            resolve(orderId);
        }

    });

    return pr;
}

function validateCart(cart) {
    return false;
}

function proceedToPayment(orderId) {

    return new Promise(function(resolve,reject){     //constructor 
        resolve("payment is sucessful");
    });
}