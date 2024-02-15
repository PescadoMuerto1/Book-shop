'use strict'

var gBooks =[ 
{id: makeId(),
    title: 'The adventures of Lori Ipsi',
    price: 120,
    imgUrl: 'lori-ipsi.jpg'
},
{id: makeId(),
    title: 'World atlas',
    price: 200,
    imgUrl: 'lori-ipsi.jpg'
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

function addBook(title, price){
    const book = _createBook(title, price)
    gBooks.push(book)
}

function _createBook(title, price) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: 'lori-ipsi.jpg'
    }
}