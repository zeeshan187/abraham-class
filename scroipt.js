// let age = 20;
// let name = "abarahan";
// let country = "USA";
// console.log("My Name is " , name , " And my Age is ", age, "and my country is ", country );

// console.log(`My name is ${name} My age is: ${age} and my country is ${country}`);

// let func1=()=>console.log("line 1")

// console.log("calling function first time")
// func1();
// console.log("calling function second time")
// func1();

// rest operator, spread operator

// array
// let Sum = (name, ...marks) => {
//     console.log(name);
    
//   let sum = 0;
//   for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
//   }
//   console.log(sum);
// };
// let data=["abraham", 20, 30, 40, 50, 60, 70, 80]
// Sum(...data);



// let array1=[10,20,30]
// let array2=[40,50,60]
// let array3=[...array1, ...array2]

// console.log(...array3);


// let data=["Zeeshan", 23, "Pakistan"]
// let [name, age, country]=data;
// console.log(age);

// object destruturing
// let data={
//     age:23,
//     name:"zeeshan",
//     country:"Pakistan"
// }
// let {age, name, country}=data;
// console.log(name);

// let function1=(()=>{

// })

// creatig api--> backend
// integrating api--> frontend


let data=fetch('https://jsonplaceholder.typicode.com/todos/')
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>{
    console.log(err);
})  



