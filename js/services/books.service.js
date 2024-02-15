'use strict'

var gBooks =[ 
{id: 'bg4J78',
    title: 'The adventures of Lori Ipsi',
    price: 120,
    imgUrl: 'lori-ipsi.jpg'
},
{id: 'bg4J44',
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