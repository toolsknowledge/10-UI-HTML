//in javascript evalution happeining from left to right
// true - 1
// false - 0
console.log( 3 > 2 > 1 );                   //false
console.log( 10 < 9 < 8 );                  //true
console.log( true + true );                 //2
console.log( true + "true" );               //truetrue
console.log( true / false );                //Infinity
console.log( true / "false" );              //NaN


//BODMAS
//B - Bracket
//O - of
//D - Division
//M - Multiplication
//A -  Addition
//S - Subtraction
console.log( 10+5 / 10-5 );             //5.5
console.log( (10+5) / (10-5) );         //3


// ==  (data)
// === (data & datatype)
console.log( 10 == "10" );                  //true
console.log( 10 === "10");                  //false
console.log( 10 == "ten" );                 //false
console.log( 10 === "ten");                 //false
console.log( 0.1+0.2 );                     //0.30000000000000004
console.log( 0.1+0.2 == 0.3 );              //false
console.log( 0.1+0.2 === 0.3 );             //false

//&
//|
//^
console.log( 1 & 1 );                   //1
console.log( 1 & 0 );                   //0
console.log( 0 & 1 );                   //0
console.log( 0 & 0 );                   //0


console.log( 1 | 1 );                   //1
console.log( 1 | 0 );                   //1
console.log( 0 | 1 );                   //1
console.log( 0 | 0 );                   //0

console.log( 1 ^ 0 );                   //1
console.log( 1 ^ 1 );                   //0
console.log( 0 ^ 0 );                   //0  
console.log( 0 ^ 1 );                   //1


//undefined
//null

var x;
console.log(x);                     //undefined

x=null;
console.log(x);                     //null

console.log( undefined == undefined );              //true
console.log( undefined === undefined );             //true
console.log( null == null );                        //true
console.log( null === null );                       //true
console.log( undefined == null );                   //true
console.log( undefined === null );                  //false                


































































































