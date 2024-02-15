'use strict'

function onInit(){
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const strHTMLs = books.map(book => `
    <div class="book-container">
    <img src="img/${book.imgUrl}" alt="">
    <div class="book-title">${book.title}</div>
    <div class="book-price">${book.price}</div>
    
    <div class="options">
            <button onclick="onUpdateBook(event,'${book.id}')" >Update Book</button>
            <button onclick="onRemoveBook(event,'${book.id}')" >Remove book</button>
    </div>
</div>
    `)

    const elTable = document.querySelector('.box')
    elTable.innerHTML = strHTMLs.join('')

}

function onRemoveBook(ev,bookId){
    ev.stopPropagation()
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(ev,bookId){
    ev.stopPropagation()
    const bookPrice = prompt('enter the new price')
    updateBook(bookId, bookPrice)
    renderBooks()
}

function onAddBook(){
    const title = prompt('enter new book title')
    const price = prompt('enter new book price')
    const img = prompt('enter new book img')
    addBook(title, price, img)
    renderBooks()
}