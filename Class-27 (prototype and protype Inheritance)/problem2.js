function Book(Name , Author){
    this.name = Name
    this.author = Author
}

let book1 = new Book('Harry Potter' ,'JK Rowling')

console.log(book1)
console.log(book1.hasOwnProperty('name'))