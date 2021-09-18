// di index.js
const readBooks = require('./callback.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
books.forEach(book => readBooks(10000, book, (callbackReadBooks) => {
    console.log(callbackReadBooks)
}))