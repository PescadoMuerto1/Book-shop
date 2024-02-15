'use strict'

function onInit(){
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const strHTMLs = books.map(book => `
        <tr>
        <td class="book-title">${book.title}</td>
        <td class="book-price">${book.price}</td>
        <td class="btns">
            <button class="Read-btn">Read</button>
            <button onclick="onUpdateBook(event,'${book.id}')">Update</button>
            <button onclick="onRemoveBook(event,'${book.id}')">Delete</button>
        </td>
        </tr>
    `)

    const elTable = document.querySelector('tbody')
    elTable.innerHTML = strHTMLs.join('')

    // renderStats()
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
    addBook(title, price)
    renderBooks()
}