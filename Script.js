// const coding =["html","css","js","react","nodejs"];

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
    
// })

// console.log(value);

// for each loop  me value me function ko assign kre 
// aur us valaue ko console log kre to undefined aayega
// kyuki for each loop me return nhi hota hai
// agr hame value chaihiye to hum particilar us value ko return krna padega 
// eg return item;
// but fir bhi hame value nhi milega


// filter method me hame value milti hai

const myNums = [1,2,3,4,5,6,7,8,9,10];

// this is implicit return.. in implicit return me hame return keyword use nhi krna padega
// const newNum = myNums.filter( (num) => num > 5 )

// this is explicit return.. in explicit return me hame return keyword use krna padega
// const newNum = myNums.filter((num) => {
//     return num > 5
// })



//........for for each loop .....

// const newNum =[]
// myNums.forEach( (num) => {
//     if(num >4 ) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);


 const books = [
    {title: 'Book One', genre: 'Fiction', publish:1981,
    edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish:1992,
    edition: 2008},     
    {title: 'Book Three', genre: 'History', publish:1999,
    edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish:1989,
    edition: 2010},
    {title: 'Book Five', genre: 'Science', publish:2009,
    edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish:1987,
    edition: 2010},
    {title: 'Book Seven', genre: 'History', publish:1986,
    edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish:2011,
    edition: 2016}, 
    {title: 'Book Nine', genre: 'Non-Fiction', publish:1981,
    edition: 1989}
 ];

//  const userBooks = books.filter( (bk) => bk.genre === 'History')


const userBooks = books.filter( (bk) => {
    return bk.genre === 'History' && bk.publish >= 1995 && bk.edition >= 2005
})
 console.log(userBooks);
 