// const p = new Promise((resolve ,reject) => {
//     resolve("promise value sucessful");
// })

// async function getData(){
//    const val = await p;
//    console.log(val);               //handle the promise using async await
// }
// getData();


// function handlePromise(){
//     p.then((res) => console.log(res));    //handle the promise using normal function
// }


// p.then(res => console.log(res));

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise sucessful");
//     },10000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise sucessful");
//     },20000);
// })

// async function getData(){
//     console.log("hello world");
//     const val = await p1;  
//     console.log("ram ram!!");
//     console.log(val);

//     const val2 = await p2;
//     console.log("ram sita!!");
//     console.log(val2);


// }

// getData();

//Real world example 
//using fetch()

// const API_URL = " https://api.github.com/users/KRISHUU08";

// async function getData(){

//     const data = await fetch(API_URL);

//      const jsonValue= await data.json()
//      console.log(jsonValue);
// }
// getData();

// const obj = {
//     a: 10,
//     x: () => {
//         console.log(this);
//     },
// };
// obj.x();

// const obj2 = {
//     a: 10,
//     x: function() {
        
//         //enclosing lexical context
//         const y = () =>{

//             console.log(this);
//         }

//         y()
        
//     },
// };
// obj2.x();

//call , apply and bind()

const name = {
    first : "krish",
    last : "grover",
    
}

const printFullName = function(hometown){
    console.log(this.first + " " + this.last + "from" +  hometown);
}

printFullName.call(name, "Ratia");


const name2 = {
    first : "sahil",
    last : "kumar",
}

printFullName.call(name2, "fatehabad");   //call method


