//converting complex business logic to simple business logic called as currying

/*
    function my_fun(param1,param2,param3){
        return param1+param2+param3;
    }
    console.log( my_fun( 10, 10, 10 ) );
    //30
*/


const my_fun = (param1)=>{
    return (param2)=>{
        return (param3)=>{
            return param1+param2+param3;
        }
    }
}
console.log( my_fun(10)(10)(10) );
//30


