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
            <button class="Update-btn">Update</button>
            <button class="Delete-btn">Delete</button>
        </td>
        </tr>
    `)

    const elTable = document.querySelector('tbody')
    elTable.innerHTML = strHTMLs.join('')

    // renderStats()
}
