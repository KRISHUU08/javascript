// function x(){
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// function z(){
//     var b = 500;
//     function x(){
//         var a = 10;
//         function y() {
//             console.log(a,b);          //Function inside function
//         }
//         y();
//     }
//     x();
// }
// z();


// function outside(d) {
    
//     function inner() {
//         console.log(c,d);
//     }
//     let c = 6;
//     return inner;
// }
// outside("hello")();



// function count(){
//  var counter = 0;   // now it is hidden

//  return function incrementCounter() {          /////DATA HIDING EXAMPLE/////
//     counter++;
//     console.log(counter);
    
//  }
// }
//  var count1 = count();
//  count1();
//  count1();
//  count1();
//  count1();

//  var count2 = count();
//  count2();
//  count2();


 //Use constructor function for better scalable and understanding the  code//

//  function Count(){
//     var counter = 0;
//     this.incrementCounter = function(){
//         counter++;
//         console.log(counter);
//     }
//     this.decrementCounter = function(){
//         counter--;
//         console.log(counter);

//  }
// }
// var count1 = new Count();
// count1.incrementCounter();
// count1.incrementCounter();
// count1.decrementCounter();
// count1.decrementCounter();
// count1.decrementCounter();
     



