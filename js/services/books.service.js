'use strict'
const BOOK_DB = 'bookDB'
var gBooks
_createBooks()

function getBooks(){
    return gBooks
}

function removeBook(bookId){
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    _saveBooks()
}

function updateBook(bookId, bookPrice){
    const book = gBooks.find(book => book.id === bookId)
    book.price = bookPrice
    _saveBooks()
}

function addBook(title, price, img){
    const book = _createBook(title, price, img)
    gBooks.push(book)
    _saveBooks()
}

function _createBooks(){
    gBooks = loadFromStorage(BOOK_DB)

    if(!gBooks){
        gBooks = [
        _createBook('The adventures', 50, 'img1.jpg'),
        _createBook('Harry Potter', 80, 'img2.jpg'),
        _createBook('World Atlas', 96, 'img3.jpg')]
    }
    _saveBooks()
}

function _createBook(title, price, img) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: img
    }
}

function _saveBooks(){
    saveToStorage(BOOK_DB, gBooks)
}

function filterBooks(letters){
    gBooks.sort(book => )
}