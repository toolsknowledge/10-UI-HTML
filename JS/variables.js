//variables are used to store the data
//Ex. string,number,boolean,arrays,objects,.....
//we will define the variables with the help of var, let or const
//let and const keywords introduced in ES6
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables declaration should not start with digits
/*
    syntax
    ******
        var/let/const variablename = value;
*/

//string
//collection of characters called as "string"
//we will declare the string in three ways ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator also called as "template literal"
//template literal introduced in ES6
//template literal used to define the paragraphs
var sub_one = "Angular13";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mean_stack = `${sub_one}<==>${sub_two}<==>${sub_three}`;
console.log(mean_stack);        //Angular13<==>NodeJS<==>MongoDB


var tbl_name = "employees";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where e_sal>${sal}`;
console.log(sql_query);             //select * from employees where e_sal>50000

var uname = "ashokit";
var upwd = "ashokit123";
var login_query = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(login_query);           //select * from employees where uname='ashokit' and upwd='ashokit123'




//number
//1) decimal            2) fractional           3) hexadecimal      4) octal            5) binary
//hexadecimal numbers prefix with 0X
//octal numbers prefix with 0o
//binary numbers prefix with 0b
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC;
var octal = 0o123;
var binary = 0b1010;
console.log( decimal, double, hexadecimal, octal, binary );         //100 100.12345 1194684 83 10


//boolean
//true    --- 1
//false   --- 0
var flag = true;
var flag1 = false;
console.log(flag, flag1);                                           //true false



//var 123abc;                 //An identifier or keyword cannot immediately follow a numeric literal.
var _123abc;
var $123abc
//var #123abc;                  //An identifier or keyword cannot immediately follow a numeric literal.


//undefined
var x;
console.log(x);                 //undefined

x=null;
console.log(x);                 //null



//typeof
console.log( typeof "Hello" );                  //string
console.log( typeof 100 );                      //number
console.log( typeof true );                     //boolean
console.log( typeof undefined );                //undefined
console.log( typeof null );                     //object
console.log( typeof [] );                       //object
console.log( typeof function fun_one(){} );     //function























































































