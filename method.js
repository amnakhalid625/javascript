                       // .... JAVASCRIPT METHODS....
            // How to add ,insert ,Replace and delete elements in an array(part no1)
//         1)Push():Method that adds one or more elements to the end of the array
//         2)Pop():Method that remove the last element of the array
//         3)Unshift():Method that add one or more elements at the begning of the array
//         4)shift():Method that remove first element from the array

// 1:push method
var array1=['amna','ayesha','noor']
array1.push('areesh')    //add element of the end of the array.Push method return a new lenght
console.log(array1);
// 2:Pop()
var array2=['ahmad','rashid','usman']
array2.pop()        //remove elements form last of an array 
console.log(array2);
var array3=['ahmad','rashid','usman']
array3.unshift('ali')   //add element at the begining of the array
console.log(array3);
var array4=['animals','memals','reptiles']
array4.shift()        //remove elements at the begning of the array .
console.log(array4);
            //    iF You want to remove and add element anywhere in the array(part2)
            // we perform these action by using splice method() in javascript
            // SYNTAX: splice(start,deleteCount,item1,item2,....itemN)
            const checkSplice=['apple','orange','banana','grapes','guave']
         console.log(    checkSplice.splice(2))    // these are given empty array
        //    EXAMPLE NO2:
        const checkSplice2=['ALI','ahmad','rashid','usman']
        checkSplice2.splice(1,2,'grapes','onoin','tomato')
        console.log(checkSplice2);
        
      //   Interview Question
      // how to add element at the end of the array
      var checkpush=[1,3,4,5,6,7,7,4,3]
      checkpush.push(23)
      console.log(checkpush);

// How to add new element with splice without deleting anything
var splice1=['orange','banana','pear','manjo']
splice1.splice(1,0,'grapes')
console.log(splice1);
//  how to add element at the end of the array with splice