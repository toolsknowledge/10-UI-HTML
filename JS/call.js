let obj = {
    num:10
}
function my_fun(param1,param2,param3){
    console.log( param1+param2+param3+this.num );
}
my_fun.call(obj,20,30,40);          //100

let arr = [20,30,40];
my_fun.apply(obj,arr);              //100

let newMemoryLocation = my_fun.bind(obj);
newMemoryLocation(20,30,40);        //100