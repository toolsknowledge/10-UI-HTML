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



































































































