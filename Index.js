// console.log("Hello World", 4 + 8);
// console.warn("Warning");
// console.error("Error");

// Javascript Variable
// var a = 10;
// var b = 5;
// console.log("10 + 5 =", a + b)

// Datatypes in Javascript
// var str1 = "this is a String."
// var str2 = 'This is a str2.'

// var num1 = 125;
// var num2 = 210.35;

// Objects
// var marks = {
//     Ravi: 35,
//     Shubham: 40,
//     Harry: 31

// }
// console.log("Marks : ", marks);

// var b3 = true;
// var b2 = false;
// console.log(c, d);

// var und=undefined;
// console.log(und);

// var n=null;
// console.log(n);

// var arr=[1,2,3,4,5,'Abc',6];   
// console.log(arr);
// console.log(arr[5]); 

// var age=15;
// age=23;

// conditions if else 

// if(age<18){
//     console.log("Child");
// } else{
//     console.log("Adult");
// }

// if else ladder 
// if(age<18){
//     console.log("Child");
// } else if(age>18 && age<60){
//     console.log("Adult");
// } else{
//     console.log("Senior");
// }

// let gender = "female"
// if(gender=="male"){
//     console.log("Male");
// } else if(gender=="female"){
//     console.log("Female")
// } else{
//     console.log("Tg")
// }

// console.log(1==='1');

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(0 && 'hello');
// console.log(5 && 'hello')   
// console.log('hello' && 7);

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(0 || 'hello');
// console.log(1 || 'hello');

// console.log(!false);
// console.log(!'Hi');

// console.log(10 > 5);
// console.log(5 > 10);
// console.log(10 < 5);
// console.log(5 <= 10);
// console.log(5 <= 5);
// console.log(5 >= 10);

// let age = 18;
// let vote= age>=18 ? "Yes,You can vote." : "No,You can't vote.";
// console.log(vote);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach(
//     function (element) {
//         console.log(element);
//     }
// )

// var arr = [4, 2, 3, 6, 5, 9, 7, 8];
// let j=5;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while(j<arr.length)

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);

// }

// let arr=['Fan','Camera',34,21.5,true,null];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// arr.push(25);
// console.log(arr.length);
// arr.pop();
// arr.shift();
// arr.unshift("Bike");
// arr.toString();
// arr.sort();
// console.log(arr);

// let str="This is a string in javascript."
// console.log(str.length);
// console.log(str.indexOf("in j"));
// console.log(str.indexOf("you"));
// console.log(str.lastIndexOf("in"));
// console.log(str.slice(0,15));
// console.log(str.slice(1,7));
// console.log(str.substring(0,12));
// console.log(str.replace('is','IS'));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.search(/jaVasCript/i));
// console.log(str.split());

// let myDate= new Date();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(myDate.getHours());

// let num=15;
// while(num<20){
//     console.log("Hello");
//     num++;
// }

// for (var i = 0; i < 5; i++) {
// setTimeout(() => {
//         console.log(i);
//     }, 0.000001);
// }
// console.log("---------------------")

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }
// let i=5;
// console.log(i);

// console.log(a);
// var a=8;

// for (let i = 1; i <= 10; i++) {
//     console.log(2*i);

// }

// for (let i = 0; i <= 20; i+=2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i+=3) {
//     console.log(i);
// }

// let arr = [5,5,3]
// let large = 0;
// let secondLarge = 0;

// for (i = 0; i < arr.length; i++) {
//     if (large < arr[i]) {
//         secondLarge=large;
//         large = arr[i];
//     } else if(arr[i] > secondLarge && arr[i] < large){
//         secondLarge=arr[i]
//     }
// }
// console.log(secondLarge);

// arr=[1,2,1]
// let small = Infinity;
// let secondSmall = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < small) {
//         secondSmall = small;
//         small = arr[i];
//     } else if (arr[i] < secondSmall && arr[i] > small) {
//         secondSmall = arr[i];
//     }
// }
// console.log(secondSmall);



// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let k = 1; k <= n - i; k++) {
//         pattern += "  ";
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let pattern = "";
//     for (let k = 1; k <= n - i; k++) {
//         pattern += "  ";
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }


