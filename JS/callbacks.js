/*
    function fun_one(param1){
        console.log( param1() );
    };

    function fun_two(){
        return "Hello";
    };

    fun_one( fun_two );             //Hello
*/

/*
    function fun_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    }

    fun_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    } );
    //Hello_1 Hello_2 Hello_3
*/


/*
    let fun_one = (param1,param2,param3)=>{
        console.log( param1(), param2(), param3() );
    }

    fun_one( ()=>{ return "Hello_1" }, ()=>{ return "Hello_2" }, ()=>{ return "Hello_3" } );
    //Hello_1 Hello_2 Hello_3
*/


/*
    let fun_one = (param1)=>{
        return param1("Hello_1","Hello_2","Hello_3")
    };

    fun_one( (arg1,arg2,arg3)=>{
        console.log( arg1, arg2, arg3 );
    } );
    //Hello_1 Hello_2 Hello_3
*/








let add = (num,callback)=>{
    return callback(num+5, false);
}

let sub = (num,callback)=>{
    return callback(num-3,false);
}

let mul = (num,callback)=>{
    return callback(num*2,false);
}

let div = (num,callback)=>{
    return callback( (num/2)-2, false );
}

add( 5, (addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul( subRes, (mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(addRes,subRes,mulRes,divRes);
                            }
                        })
                    }
                })
            }
        });
    }
} );

//callback hell

//promises





























































