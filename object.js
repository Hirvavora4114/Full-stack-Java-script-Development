// let person = {
//     pname = "John",
//     age = 30,
//     city= "mumbai";
// };

// second way of defining object
// let person = new Object();
// person.pname = "John";
// person.age = 30;
// person.city = "mumbai";

//how to acces object properties and methods
// console.log(person.pname);
// console.log(person.age);
// console.log(person.city);

//what kind of data can object contain?
//object can have anytype of data -> primitive, array & even other objects

// let person = {
//     pname : "John",
//     age : 30,
//     hobbies : ("reading","gaming","dancing"),
//     address: {
//        street: "123 churchagte",
//         city: "mumbia", 
//     }
// };

// console.log(person.age);
// console.log(person.address.street);
// //console.log(person.hobbies);
// console.log(person.hobbies);
// console.log(person.address.city);

let person = {
    pname:"tirup",
    age:30,
    greet:function(){
        console.log(`hello, my name is ${this.pname}`);
    }
}

person.greet(); //output-> hello......