// for each method(this are very important method of arrays)
    // the arr.forEach call the provided function once for each Element of array.they provided function 
    // that may provided functions may perform any kind of operation on the elements of the given array
            //    SYNTAX OF FOREACH()
        //     array.forEach(function  callback
        // (currentvalue,index,array){
        //             your logic here are written
        //         },
        //    thisvalue );
            //  SYNTAX OF FOREACH WITH THE HELP OF ARROW FUNCTIONS
            // array.forEach((cuurentvalue,index,array)=>
            // {
            //     logics
            // },
            // thisValue
            // );
            //    SNTAX OF mapof( function)
            /*array.map( function callback) 
            (currentvalue,index,array)
            {
                logics
            },
            thisvalue)
             SYNTAX OF MAP OF WITH THE HELP OF ARROW FUNCTIONS
            */
             var myFruits=['apple','orangne','banana']
             const fruitArray= newFruits.forEach(( curElem,index,arr)=>{
              return `${curElem} ${index}`
              // console.log(`${curElem} ${ index}`);
              // console.log(arr);
             })
             console.log(fruitArray);            //is ki output undefined ay gi return k bad body k bahar console nai karwa sakty
  // difference between for each and map function map fucntion is liyy istmal hota ha k ager hum ny ik array ki
  // help sy new modified array design karna hota ha to is k liy best ha
  var myFruits=['apple','orangne','banana']
   const mapArray=myFruits.map((curElem,index,arr)=>{
      // console.log(`${curElem}${index}`);
      // console.log(arr);
      return `${curElem} ${index}`
  })
  console.log( mapArray);      //is me return b bad console body k bahar b karwaya ha likin un defined ni aa raha 
  
  // pratice time 
  // write a program to multiply each element with 2
   var newArray= [2,4,7,9,10]
   const doubleNumber= newArray.map((curElem)=>{
  //    return curElem*2;
      return curElem*2
  })
  
   var  checkArray=[2,4,7,9,10]
  checkArray.forEach(( curElem)=>{
      console.log(curElem*2);
      // console.log(newArray);
  })
  
  
      //    PERFORM AN ACTION OF EACH ELEMENTS   (WITH FOREACH FUNCTION)
          //    CREATE NEW ARRAY WITH THE TRANSFORMED ELEMENT (WITH THE MAP)
          // KEY DIFFERENCES BETWEEN FOR EACH AND MAP (IMP)
          // 1)RETURN VALUE:
          // foreach() does not return a value
          //  2) CHAINING:
          // It does not return a value.so it cannot directly chained with other array methods
          //  MAP:
          // in map return a new array you can chain other method after using map
 