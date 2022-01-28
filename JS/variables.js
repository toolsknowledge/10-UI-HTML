//variables
//variables are used to store the data
//Ex. string, number, boolean, arrays, objects,.....
//we will define the variables with the help of var / let / const
//let & const keywords introduced in ES6
//ES Stands for ECMA Script
//variables should contain a-z, A-Z, 0-9, $ and _
//variables declaration should not start with digits
//javascript supports the following datatypes
//1) string    2) number    3) boolean     4) undefined     5) null    6) bigint    7) Symbol
/*
    syntax
    ******
    var/let/const variablename = value;
*/

//string
//collection of characters called as string
//we will define the string with the help of ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) called as template literal
//``(backtick) operator introduced in ES6
//``(backtick) operator used to define the paragraphs (multiline strings)
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB"; 
var mern_stack = `${sub_one}<==>${sub_two}<==>${sub_three}`;
console.log(mern_stack);


var table_name = "employees";
var sal = 50000;
var sql_query = `select * from ${table_name} where esal>${sal}`;
console.log(sql_query);                     //select * from employees where esal>50000


var u_name = "ashokit";
var u_pwd = "ashokit123";
var login_query = `select * from ${table_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(login_query);


var front_end = "Angular13";
var backend = "NodeJS";
var database = "MongoDB";
var mean_stack = `
        MEAN Stack
        ********** 
        mean stack development means collabration of following technologies
        Frontend-----> ${front_end}
        backend -----> ${backend}
        database-----> ${database}
`;
console.log(mean_stack);



//number
//decimal, fractional, hexadecimal, octal and binary
//hexadecimal numbers prefix with "0x"
//octal numbers prefix with "0o"
//binary numbers prefix with "0b"
var decimal_num = 100;
var fractional_num = 100.12345;
var hexadecimal_num = 0X123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log(decimal_num,fractional_num,hexadecimal_num,octal_num,binary_num);
//100 100.12345 1194684 83 10


//boolean
//true ---  1
//false --- 0
var flag = true;
var flag1 = false;
console.log( flag, flag1 );                 //true false



//array
//collection of indexed elements called as "array"
//[]
//index starts from 0
var arr1 = [10,20,30,40,50];
//loops
//for loop
for(var i=0;i<5;i++){
    console.log( arr1[i] );
}

//forEach()
arr1.forEach((element,index)=>{
    console.log(element, index);
})


var array1 = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
var array2 = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];


array1.forEach((element,index)=>{
    console.log(element,array2[index]);
});



//json
//java script object notation
//javascript objects
//json is light weight
//used to transfer the data over the "network"
//Syntax
//Objects ----    {}
//Arrays  ----    []
//data    ----    key & value pairs ,  key & value separated by using ":", key & value pairs separated by using ","   
var obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );             //ReactJS NodeJS MongoDB


var obj1 = {
    "key1" : "value1",
    "key2" : "value2",
    "key3" : "value3"
};
//for....in  loop
for(var key in obj1){
    console.log( obj1[key] );
}

var x;       
console.log(x);                     //undefined

x=null;
console.log(x);                     //null


//datatype
//typeof
console.log( typeof "Hello" );              //string
console.log( typeof 100 );                  //number
console.log( typeof true );                 //boolean
console.log( typeof undefined );            //undefined
console.log( typeof null );                 //object
console.log( typeof [] );                   //object
console.log( typeof function(){} );         //function




//evalution(execution) happens from left to right  (javascript)
console.log( 10>9>8 );                  //false
console.log( 1<2<3 );                   //true


//BODMAS
//BRACKET
//OF
//DIVISION
//MULTIPLICATION
//ADDITION
//SUBTRACTION
console.log( 10 + 5/10 - 5 );               //5.5
console.log( (10 + 5)/(10 - 5) );           //3


// ==   (compare left value with right value)
// ===  (comapre left value with datatype with right value with datatype)
console.log( 10 == "10" );              //true
console.log( 10 === "10" );             //false
console.log( 10 == "ten" );             //false
console.log( 10 === "ten" );            //false


//"more accuracy" while adding "fractional" numbers
console.log( 0.1+0.2 );                     //0.30000000000000004
console.log( 0.1+0.2 == 0.3 );              //false
console.log( 0.1+0.2 === 0.3 );             //false



// &    (and) left and right should be true ---- true
// |    (or)  at least one should be true   ---- true
// ^    (xor) both should be opposite       ---- true

console.log( 1 & 1 );                   //1
console.log( 1 & 0 );                   //0
console.log( 0 & 1 );                   //0
console.log( 0 & 0 );                   //0

console.log( 1 | 0 );                   //1
console.log( 0 | 1 );                   //1
console.log( 1 | 1 );                   //1
console.log( 0 | 0 );                   //0


console.log( 1 ^ 1 );                   //0
console.log( 0 ^ 0 );                   //0
console.log( 1 ^ 0 );                   //1
console.log( 0 ^ 1 );                   //1

























































































































































































































































































