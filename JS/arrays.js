/*
    let arr = [10,20,30,40,50];
    console.log( arr[0], arr[2], arr[4], arr[5], arr[100], arr[-1] );
    //10 30 50 undefined undefined undefined
*/

/*
    //length
    //used to find the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                      //10

    arr.length = 5;
    console.log( arr[0], arr[4], arr[9],arr[100], arr[5] );
    //10 50 undefined undefined undefined


    arr[100] = 1000;
    console.log( arr.length );                  //101
*/



/*
    //delete
    //delete property "deletes" the element and never releses the memory
    let arr = [10,20,30,40,50];
    console.log( arr.length );              //5

    delete arr[0];
    console.log( arr.length );              //5

    console.log( arr );                    //[ <1 empty item>, 20, 30, 40, 50 ]

    delete arr[4];
    console.log(arr.length);               //5
    console.log( arr );                    //[ <1 empty item>, 20, 30, 40, <1 empty item> ]
*/



/*
    //push()                --          add the element at end of array 
    //pop()                 --          removes the element from the end of array
    //unshift()             --          add the element at the begining of array
    //shift()               --          removes the element from begining of array
    let arr = [20,30,40];
    console.log( arr );                 //[ 20, 30, 40 ]

    arr.push(50);
    console.log( arr );                 //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log( arr );                 //[ 10, 20, 30, 40, 50 ]


    arr.pop();
    console.log(arr);                   //[ 10, 20, 30, 40 ]

    arr.shift();
    console.log(arr);                   //[ 20, 30, 40 ]
*/


/*
    //splice()
    //"delete" and "add" the elements at a "particular" index
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.splice(3,2);
    console.log(arr);               //[10,20,30,60,70,80,90,100]

    arr.splice(7,1);
    console.log(arr);               //[10,20,30,60,70,80,90]


    arr.splice(0,1);
    console.log(arr);               //[ 20, 30, 60, 70, 80, 90 ]


    arr.splice(3,2);
    console.log( arr );             //[ 20, 30, 60, 90 ]


    arr.splice(2,0,40,50);
    console.log(arr);               //[ 20, 30, 40, 50, 60, 90 ]


    arr.splice(0,0,10);
    console.log(arr);               //[ 10, 20, 30, 40, 50, 60, 90 ]


    arr.splice(6,0,70,80);
    console.log(arr);               //[ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]


    arr.splice(9,0,100);
    console.log(arr);               //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
*/



/*
    let arr = [1,[2],[3,4],[5,6,7]];
    console.log( arr.flat(1) );             //[1,2,3,4,5,6,7]

    let arr1 = [1,[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
    console.log( arr1.flat(Infinity) );     //[ 1, 2, 3 ]
*/


/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*10;
        })
    );
    //[ 10, 20, 30, 40, 50 ]



    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return element/100;
        })
    );
    //[ 1, 2, 3, 4, 5 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return {[element]:index};
        })
    );
    //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]
    //[ { '1': 0 }, { '2': 1 }, { '3': 2 }, { '4': 3 }, { '5': 4 } ]
*/



/*
    console.log(
        [1,2,3,4,5].filter((element,index)=>{
            return element>=4;
        })
    );
    //[ 4, 5 ]

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element>200;
        })
    );
    //[ 300, 400, 500 ]
*/




/*
    console.log(
        [1,2,3,4,5].reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );
    //15

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element>=100;
        }).reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );
    //1500
*/




/*
    console.log(
        ["UI","to","Welcome"].reduceRight((firstElement,nextElement)=>{
            return firstElement+" "+nextElement;
        })
    );
    //Welcome to UI
*/


/*
    //slice()
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr1.slice(4,7) );                         //[ 50, 60, 70 ]
    console.log( arr1.slice(0,2) );                         //[ 10, 20 ]
    console.log( arr1.slice(0,1) );                         //[ 10 ]
    console.log( arr1.slice(9) );                           //[ 100 ]
    console.log( arr1.slice(-2,-1) );                       //[ 90 ]
    console.log( arr1.slice(-1) );                          //[ 100 ]
    console.log( arr1.slice(-10,-9) );                      //[ 10 ]
    console.log( arr1.slice(3,7) );                         //[ 40, 50, 60, 70 ]
    console.log( arr1.slice(-7,-3));                        //[ 40, 50, 60, 70 ]
*/


/*

//... 
//spread operator
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,6,7,8,9,10];
console.log(arr2);          //[1,2,3,4,5,6,7,8,9,10]


//addition of arrays
let x1 = [1,2,3,4,5];
let y1 = [6,7,8,9,10];
let z1 = [...x1,...y1];
console.log(z1);


*/

//let arr1 = [1,2,3,4];
//[3,4,1,2]


//[1,2]
//[3,4]

//[3,4,1,2]




/*
//findIndex()
//used to know the index of a element
console.log(
    [10,20,30,40,50].findIndex((element,index)=>{
        return element == 30;
    })
);
//2

console.log(
    [10,20,30,40,50].findIndex((element,index)=>{
        return element == 50;
    })
);      //4


console.log(
    [10,20,30,40,50].findIndex((element,index)=>{
        return element == 60;
    })
);          //-1



    let arr = [10,20,30,40,50];
    arr.splice(arr.findIndex((element,index)=>{
        return element == 30;
    }),1);    
    console.log(arr);
    //[ 10, 20, 40, 50 ]


    arr.splice(arr.findIndex((element,index)=>{
        return element == 50;
    }),1);
    console.log(arr);
    //[ 10, 20, 40 ]
*/

/*
    let arr = [10,20,30,40,50];
    console.log(
        arr.find((element,index)=>{
            return element == 30;
        })
    );
    //30

    console.log(
        arr.find((element,index)=>{
            return element == 300;
        })
    );
    //undefined
*/



/*
    let arr = [10,20,30,40,50];
    console.log(
        arr.includes(30)
    );
    //true

    console.log(
        arr.includes(300)
    );
    //false
*/


/*
    let arr = [10,20,30,40,50];
    console.log(
        arr.some((element,index)=>{
            return element>=50;
        })
    );
    //true

    console.log(
        arr.some((element,index)=>{
            return element>50;
        })
    );
    //false
*/



/*
    //every()
    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element>=10;
        })
    );
    //true

    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element>10;
        })
    );
    //false
*/




/*
    let arr = [10,20,30,40,50];
    arr.fill(100);
    console.log(arr);                                       //[ 100, 100, 100, 100, 100 ]

    arr.fill(200,1);
    console.log(arr);                                       //[ 100, 200, 200, 200, 200 ]


    arr.fill(300,2,3);
    console.log(arr);                                       //[ 100, 200, 300, 200, 200 ]


    arr.fill(400,3,4);
    console.log(arr);                                       //[ 100, 200, 300, 400, 200 ]


    arr.fill(500,4);
    console.log(arr);                                       //[ 100, 200, 300, 400, 500 ]
*/


/*
    let arr1 = [10,50,20,40,30];
    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );
    //[ 10, 20, 30, 40, 50 ]

    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );
    //[ 50, 40, 30, 20, 10 ]



let arr1 = [50,30,10,40,20,80,60,90,70,-5];
//2nd min : 10
//2nd max : 80
console.log(
    arr1.sort((arg1,arg2)=>{
        return arg1-arg2;
    })[1]
);
//10
console.log(
    arr1.sort((arg1,arg2)=>{
        return arg2-arg1;
    })[1]
); //80 
*/


/*
    let arr1 = [1,2,3,4,5];
    let arr2 = ["one","two","three","four","five"];
    //[[1,"one"],[2,"two"],[3,"three"],[4,"four"],[5,"five"]]
    //[1,"one",2,"two",3,"three",4,"four",5,"five"]
    console.log(
        arr1.flatMap((element,index)=>{
            return [element,arr2[index]];
        })
    );
    /*
        [
            1, 'one',
            2, 'two',
            3, 'three',
            4, 'four',
            5, 'five'
        ]

*/
/*
//indexOf()
//it won't create indexes to repeated elements
let arr1 = [10,20,30,10,20,30];
arr1.forEach((element,index)=>{
    console.log(element,index);
    console.log( arr1.indexOf(element), index );
});


    10  0               0   0

    20  1               1   1

    30  2               2   2

    10  3               0   3

    20  4               1   4

    30  5               2   5
*/

/*
    let arr1 = [10,20,30,10,20,30];
    console.log(
        arr1.filter((element,index)=>{
            return arr1.indexOf(element) === index;
        })
    );          //[ 10, 20, 30 ]
*/



//reverse()
//reverse() function used to reverse the "array elements"
console.log(
    [10,20,30,40,50,60].reverse()
);
//[ 60, 50, 40, 30, 20, 10 ]

console.log(
    ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"].reverse()
);
//[ 'Hello_5', 'Hello_4', 'Hello_3', 'Hello_2', 'Hello_1' ]


console.log(
    Array.from("Haroon").reverse().toString().replaceAll(",","")
);

//nooraH






































































































































































































































































































































































































































































































