//we can use arrow fun in high order functions as a parameter passing -> when high order function takes args or parameters is called callback(it's a fun which is passed in other function as a args or parameter)
//so arrow function we generally assign to any var or we can use as a callback
//Arrow functions are nameless functions also they don't have function keyword
// const sum = (a,b) => {
//     console.log(a+b);
// }

// function sum(a,b) {
//     console.log(a+b);
// }

//sum(10,20) //30

// const cube = n => {
//     return n*n*n;
// };

// const pow = (a,b) => {
//     return a ** b;
// };

// const hello = () => {
//     console.log("hello world!!!");
// }


// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;

// const cube = (a) => a*a*a;

//Timeout function
// console.log("Kaise ho sab log!!!");

// setTimeout ( () => {
//     console.log("This is Timeout function...");
// }, 4000);

// console.log("this line is written after timeout...");


// let id = setInterval ( () => {
//     console.log("Kaise hai sab log...");
// }, 2000);

// console.log(id);

// let id2 = setInterval ( () => {
//     console.log("kya haal chal");
// }, 4000);

// console.log(id2);


const student = {
    name: "tirup",
    marks: 96,
    prop: this, //scope global
    getName: function () {
        console.log(this); //student object refer
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope => window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout ( () => {
            console.log(this); //now refers students object 
        }, 2000);
    },
    getInfo2: function () {
        setTimeout (function() {
            console.log(this); //window object
        }, 2000);
    }
};

const a = 5; //global scope