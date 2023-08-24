// const str="hello my name";

// let res=str.slice(0,6)
// console.log(res)

// // display 280 characters


// // //  Callback Function

// const add = (a,b) => {
//         return a+b;
//     }
//     // console.log(add(5,2));
    
//     const subs = (a,b) => {
//         return Math.abs(a-b);
//     }
//     const mult = (a,b) => {
//         return a*b;
//     }
    
//     const calculator = (num1,num2, operator) => {
//       return operator(num1,num2);
//     }
    
    
    
//     console.log(calculator(5,2,subs));
//     console.log(calculator(5,6,add));
//     console.log(calculator(5,6,subs));
//     console.log(calculator(5,6,mult));




//     //   Synchronous JavaScript Prog 



// const fun2 = () => {
//   console.log(`Function 2 is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again`);
// }
// fun1();


// // Asynchronous JavaScript Prog 

// const fun3 = () => {
//   setTimeout(()=> {
//       console.log(`Function  3 is called`);
//   }, 2000);
// }

// const fun4 = () => {
//   console.log(`Function 4 is called`);
//   fun3();
//   console.log(`Function 4 is called Again`);
// }

// fun4();




// // Hoisting

// console.log(myName);
// let myName;
// myName = "thapa";


// var myName = undefined;
// console.log(myName);
// myName = "thapa";





let a = "Hello guys. "; // global scope

const first= () => {
  let b = " How are you?"
 
    const second = () => {
      let c = " Hii, I am fine thank you🙏";
      console.log(a+b+c);
    }
    second();
    console.log(a+b+c);
}

first();



