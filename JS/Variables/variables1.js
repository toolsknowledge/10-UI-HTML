//let keyword
//ES6
//used to declare the variables


/*
    //for loop
    for(let i=0;i<5;i++){
    
    };

    console.log(i);             
    //let : ReferenceError: i is not defined
    //var : 5

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/



/*
console.log( data );                   //let:ReferenceError: Cannot access 'data' before initialization
                                       //var:undefined
let data = 100;

//variable hoisting raised because of "var" keyword
//we can overcome variable hoisting with the help of "let" keyword
*/




/*
    //global variable
    let data = 100;                  

    {
        //local variable
        let data = 200;
    }

    console.log(data);
    //let : 100    var : 200
    //global polluting issue raised because of "var" keyword
    //we can overcome global polluting issue with the help of "let" keyword
*/



/*
let x = 100;
let x = 200;
console.log(x);
//var : 200
//let : SyntaxError: Identifier 'x' has already been declared

//var keyword allows the duplicate variables
//let keyword won't allows the duplicate variables
*/




/*
                var                                                 let
    **************************************************************************************************************
    var keyword introduced in ES1                   let keyword introduced in ES6

    var keyword allows the "duplicate"              let keyword won't allows the "duplicate" variables
    variables    

    variable "hoisting" raised because of           we can overcome variable hoisting with the help of
    var keyword                                     let keyword

    global polluting issue "raised"                 we can overcome global polluting issue with "let" keyword
    because of var keyword

    scope rule break by "var" keyword              scope rule obey by let keyword

    var members called as "global" members         let members called as "block" scoped members
    ************************************************************************************************************
*/



//const
//const is the keyword
//ES6
//reinitilization not possible
const data = 100;
//data = 200;                                 //TypeError: Assignment to constant variable.


const arr = [100,200,300,400,500];
//arr = [];                                       //TypeError: Assignment to constant variable.
//arr = [10,20,30,40,50];                         //TypeError: Assignment to constant variable.

arr[0] = 10;
arr[4] = 50;
console.log(arr);                               //[ 10, 200, 300, 400, 50 ]


const obj = {"key1":"value1","key2":"value2","key3":"value3"};
//obj = {};               //TypeError: Assignment to constant variable.

//obj = {"key1":"welcome1","key2":"welcome2","key3":"welcome3"};

                    //TypeError: Assignment to constant variable.

obj.key1 = "welcome_1";
obj.key2 = "welcome_2";
obj.key3 = "welcome_3";
console.log(obj);               //{ key1: 'welcome_1', key2: 'welcome_2', key3: 'welcome_3' }



































































































































