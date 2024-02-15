'use strict'

var gBooks =[ 
{id: makeId(),
    title: 'The adventures',
    price: 120,
    imgUrl: 'img1.jpg'
},
{id: makeId(),
    title: 'Harry Potter',
    price: 80,
    imgUrl: 'img3.jpg'
},
{id: makeId(),
    title: 'World atlas',
    price: 200,
    imgUrl: 'img2.jpg'
}]

function getBooks(){
    return gBooks
}

function removeBook(bookId){
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
}

function updateBook(bookId, bookPrice){
    const book = gBooks.find(book => book.id === bookId)
    book.price = bookPrice
}

function addBook(title, price, img){
    const book = _createBook(title, price, img)
    gBooks.push(book)
}

function _createBook(title, price, img) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: img
    }
}