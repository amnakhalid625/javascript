// Searching and filtering in array 
// we use indexof , last indexof and include
//  1)Indexof :is used to return the first index the indexof method is used to find the index no of the 
// given index
// example
var findIndex=[1,4,7,8,9,0]
console.log(findIndex.indexOf(8));
console.log(findIndex.indexOf(5));
// important:agar ap ny value search ki ha jo exist hi nie karti to answer kia ho ga.to answer -1 ay ge
//  second method of check the indexof with from the index number
// syntax indexof(search Element,from index)
var second=[1,4,5,7,8,9]
console.log(second.indexOf(7,4));
// 2) Includes()method:
var checkInclude=['amna','ayesha','noor','areesh'
]
console.log(checkInclude.includes('ayesha'));
// 3) LastIndex  of
var checklast=[2,4,6,7,6,5,4,3]
console.log(checklast.lastIndexOf(6));     //6 is the repeated but lastindexof given me the index number of the 
                                         //second 6 number so the last indexof are work in these ways
