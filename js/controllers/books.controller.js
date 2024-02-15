'use strict'

var gIsNotEmpty = true

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

function onBtnAdd(){
    document.querySelector('.add-book-modal').showModal()
}

function onAddBook(ev){
    const elInputs = document.querySelector('.modal-form')
    const els = elInputs.querySelectorAll('input')
    
    handleInputs(els, ev)
    if(!gIsNotEmpty) return

    const title = elInputs.querySelector('.title').value
    const price = elInputs.querySelector('.price').value
    const img = elInputs.querySelector('.img-link').value
    addBook(title, price, img)
    renderBooks()
}

function handleInputs(els, ev){
    gIsNotEmpty = true
    els.forEach(el => {
        if(!el.value) {
            ev.preventDefault()
            el.style.outline = '2px solid red'
            gIsNotEmpty = false
            return 
        }
        el.style.outline = 'none'
        return 
    })
}

function onEventInput(ev, id){
    const inputs = document.querySelectorAll('.modal-form input')
    if(ev.keyCode === 13){
        ev.preventDefault()
        inputs[id+1].focus()
    }
}

