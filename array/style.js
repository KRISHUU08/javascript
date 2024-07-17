// map()

// const arr =  [3,2,5,7];

// function double(x){
//     return x*2;
// }
// const output = arr.map(double);
// console.log(output);

//in Binary

// const arr =  [3,2,5,7];

// const output = arr.map((x) => x.toString(2));
// console.log(output);

//filter

// const arr = [3,2,5,7,];
// const output = arr.filter((x) => x>2);
// console.log(output);

//reduce

// const arr = [3,2,5,7];

// function findSum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const arr = [3,2,5,7];

// const output = arr.reduce(function (acc,curr){
//     acc = acc+curr;
//     return acc;
// },0);

// console.log(output);


//Find the max value?

// const arr = [3,2,5,7];

// function findMax(arr) {
//     let max = 0;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const arr = [3,2,5,7];
// const output = arr.reduce(function(acc, curr){
//     if(curr>acc){
//         acc = curr;
//     }
//     return acc

// },0);

// console.log(output);



const users = [
    
    { firstName: "KRISH", lastName:  "GROVER", Age: 21 },
    { firstName: "KARAN", lastName:  "KUMAR", Age: 29 },
    { firstName: "SAHIL", lastName:  "TANEJA", Age: 21 },
];

// const output = users.map((x) => x.firstName  + " "  + x.lastName);
// console.log(output);


//How many people whose age is 21 ??

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.Age]){

//         acc[curr.Age] = ++acc[curr.Age];
//     }

//     else{

//         acc[curr.Age] = 1;

//     }

//     return acc;
// },{});

// console.log(output);


//first name  of all peopple whose age is less than 30  (filter)

// const output = users.filter((x) => x.Age<25).map((x) => x.firstName);      //chaining map,filter,reduce
// console.log(output);


const output = users.reduce((acc, curr) =>{
    if(curr.Age < 25){
        acc.push(curr.firstName);  //if age of current user is < 30, push there firstName into the acc array
    }
    return acc;
}, [ ]);  //initially, the acc will be an empty array

console.log(output);