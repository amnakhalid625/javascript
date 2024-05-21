// Arrays
// what is iterable ?
// this object that ve can use this far-of loop
//  when we deal with the object we can use the far-in and far-of loop
// creating an a simple array
// Array like object
let arr=[]
console.log( typeof arr);
// array be object ha in javascript everything is a object is b type of me object hi ay ga 
// methods of creating an arrays most commonly ways are:
    //  1... Using array constructors:
    let fruits= new Array('apple','orangne','banana')
    console.log(fruits);
        // 2...  using array literals:
        let fruit=['apple','orangne','banana']
        console.log(fruit);
    // we can also create an empty Arrays
    let arrs=[]
console.log( typeof arrs);
    // Accessing elements is arrays
    // Accessing elements by using index elements
    const array=['amna','ayesha','noorfatima','areeshfatima']
console.log(array[0]);
//   Modifing Elements in Arrays
var newFruits=['apple','orangne','banana']
newFruits[2]='mango'
console.log(newFruits);
//      3... Arrays Traversal/ iterating Over Arrays
// for of loop is also know as iterable 
// for of loop is used to iterate the values of objects such as array,string and other iterable objects
// example
var newFruits=['apple','orangne','banana']
for (let item of newFruits){
    console.log(item);
}
// the same work we done using for loop
var myFruits=['apple','orangne','banana']
for( let i=0;i<=myFruits.length;i++)
    {
        console.log(myFruits[i]);
    }
// For In loop are used to iterate over the properties
var myFruits=['apple','orangne','banana']
for ( let items in  myFruits){
    console.log(items);

}
// by usign for loop this are same thing but we done with using for loop
var myFruits=['apple','orangne','banana']
for(let v=0;v<myFruits.length;v++)
    {
        console.log(v);
    }
    