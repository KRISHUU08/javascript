// function a() {
//     console.log("a called");                       // Statement
// }


// var a = function(){
//     console.log("a called");                       // expression
// }

// function () {                                       // Anonymous 

// }

// var a = function xyz(){
//     console.log("a called");                     //  Named expression
// }


// var a = function xyz(param1){
//     console.log(param1);
// }                                                //  First Class Function

// a(function() {

// });


// document.getElementById("clickMe")
// .addEventListener("click", function xyz() {          //Eventlistener
//     console.log("Button Clicked");
    
// })



// function attachedListener(){

//     let count = 0;
// document.getElementById("clickMe")
// .addEventListener("click", function xyz() {          //Eventlistener with closure
//     console.log("Button Clicked", ++count);
    
// })


// }

// attachedListener();


// let foods = [, 'braed', 'rice', 'meat', 'pizza'];

// foods.forEach(function(food) {                              //for each loop
//     console.log(food);
// })



//High order function

const radius = [3,1,2,4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {                       //This is  thebest way to represent code to find various things suchas diametre, circumference and area of circle
    
    return 2*Math.PI * radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++) {
        output.push(logic(radius[i]));
    }

    return output;

}

console.log(radius.map(area));

console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));











