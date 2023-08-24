// var fullname = "Tehreem Zahra ABC";
// var nameparts = fullname.split(" ");
// var firstname = nameparts[0];
// var lastname = nameparts[nameparts.length - 1];
// var middlenames = nameparts.slice(1,nameparts.length-1).join(" ");
// console.log("First Name:", firstname);
// console.log("Middle Name:", middlenames);
// console.log("Last Name:", lastname);

var fullName="Tehreem  ABC";
const [firstName,middle,last]=fullName.split(" ");
console.log(middle || "None");


var myname="Rabbia"
console.log(`My name is ${myname}`)
