/*
    function fun_one(param1?:string,param2?:string,param3?:string):void{
        console.log( param1, param2, param3 ); 
    };
    fun_one();                                      //undefined undefined undefined
    fun_one("Hello_1");                             //Hello_1 undefined undefined
    fun_one(undefined,"Hello_2");                   //undefined Hello_2 undefined
    fun_one(undefined,undefined,undefined);         //undefined undefined undefined
    fun_one(null,null,null);                        //null null null
*/


/*
    //in combination of regular with optional, optional parameters should have 2nd priority
    function fun_one(param1:any,param2?:any):void{
        console.log(param1,param2);
    };
    //fun_one();                        //Expected 1-2 arguments, but got 0.
    //fun_one("Hello_1");               //Hello_1 undefined
    //fun_one("Hello_1","Hello_2");     //Hello_1 Hello_2
    //fun_one(undefined,undefined);     //undefined undefined
    //fun_one(null,null);               //null null  
*/


function fun_one(param1:any,param2?:any,param3:any="hello_3",...param4:any):void{
    console.log(param1,param2,param3,param4);
}
//fun_one();                                                //Expected at least 1 arguments, but got 0.
//fun_one("Hello_1");                                       //Hello_1 undefined hello_3 []
//fun_one("hello_1","hello_2",undefined,"hello_4");         //hello_1 hello_2 hello_3 [ 'hello_4' ]
//fun_one(undefined,undefined,undefined,undefined);         //undefined undefined hello_3 [ undefined ]
fun_one(null,null,null,null);                               //null null null [ null ]
























