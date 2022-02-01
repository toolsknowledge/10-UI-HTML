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




let x = 100;
let x = 200;
console.log(x);
//var : 200
//let : SyntaxError: Identifier 'x' has already been declared

//var keyword allows the duplicate variables
//let keyword won't allows the duplicate variables



































































