
class Book {
    constructor(id, ISBN, title, author, publishedYear, price) {
        this.id = id
        this.ISBN = ISBN
        this.title = title
        this.author = author
        this.publishedYear = publishedYear
        this.price = price
    }
}

class User {
    constructor(name) {
        this.name = name
        this.listOfBooks = []
        this.borrowedBooks = []
    }
    addBooksInmyListOfBooks(book) {
        this.listOfBooks.push(book)
    }
    getMyListOfBooks() {
        console.log(`Hallo, I am ${this.name} and my list of books contains ${this.listOfBooks.length} books, which are :`);
        console.log(this.listOfBooks);
    }
    getMyCurrentBorrowedBooksLis(){
        console.log(`Hallo, I am ${this.name} and my list of BORROWED books contains ${this.borrowedBooks.length} books, which are :`);
        console.log(this.borrowedBooks);
    }
    

    checkIfTheBookIsAlreadyInMyList(bookForCheck) {
        let currenBook;
        let isTheListContainTheBook = false
        for (let i = 0; i < this.listOfBooks.length; i++) {
            currenBook = this.listOfBooks[i]
            if (currenBook.id === bookForCheck.id) {
                console.log(`I have already written this book`);
                isTheListContainTheBook = true
            }
        }
        return isTheListContainTheBook
    }
    borrowBook(bookToBorrow) {

        let checkForThsBookInTheList = this.checkIfTheBookIsAlreadyInMyList(bookToBorrow)
        if (checkForThsBookInTheList === true) {
            return checkForThsBookInTheList
        } else {
            this.borrowedBooks.push(bookToBorrow)
        }

        console.log(`You borrow new book id: ${bookToBorrow.id}`);
        console.log(this.borrowedBooks.length);
        return this.borrowedBooks

    }
    checkIfIHaveThatBookInBorrowedListThatIHaveToReturn(bookForReturn) {
        let currenBook;
        let isTheListContainTheBook = false
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            currenBook = this.borrowedBooks[i]
            if (currenBook.id === bookForReturn.id) {
                console.log(`I have already written this book id: ${currenBook.id}`);
                isTheListContainTheBook = true
            }
        }
        return isTheListContainTheBook
    }
    returnBook(bookForReturn) {
        let borrowedBookForReturn = this.checkIfIHaveThatBookInBorrowedListThatIHaveToReturn(bookForReturn)
        if (borrowedBookForReturn === true) {
            let index = this.borrowedBooks.indexOf(borrowedBookForReturn)
            this.borrowedBooks.splice(index, 1)
            console.log(`You successfully return this borrowed book ${bookForReturn.id}`);
            console.log(this.borrowedBooks.length);
        }
    }
    donateBook() { }
}


class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.libraryBooks = []
        this.landedBooks = []
    }


    searchBook(book) {
        let currentBook;

        for (let i = 0; i < this.libraryBooks.length; i++) {
            currentBook = this.libraryBooks[i]
            if (currentBook.id === book.id) {
                console.log(`the librarian found the book you were looking for id: ${currentBook.id}`);

                return currentBook
            }

        }
        console.log(`The book you are looking for is currently unavailable`)
        return currentBook
    }
    addBook(book) {
        this.libraryBooks.push(book)
    }
    lendBook(bookForLand) {
        let thisBookForLand = this.searchBook(bookForLand)
        if (bookForLand.id === thisBookForLand.id) {
            console.log(`the librarian lends this book and add this book in the LENDED LIST !`);

        } else {
            return thisBookForLand
        }
    }

    updateBook(bookForUpdate) {
        let thisBookForUpdate = this.searchBook(bookForUpdate)

        if (thisBookForUpdate.id === bookForUpdate.id) {
            thisBookForUpdate.price = 12
            console.log(thisBookForUpdate);
        }
    }
    deleteBook(bookForDelete) {
        let thisBookForDelete = this.searchBook(bookForDelete)

        if (thisBookForDelete.id === bookForDelete.id) {
            console.log(`the librarian discards a book with id: ${thisBookForDelete.id} from the library`);
            let index = this.libraryBooks.indexOf(thisBookForDelete)
            this.libraryBooks.splice(index, 1)
        }
    }

    writeBooksInStockInJSONfile(){

        const fs = require("fs")
        let book = [...this.libraryBooks]
        const data = JSON.stringify(book)
        fs.writeFile('booksInLibrary.json', data, err =>{
            if(err){
                throw err
            }
            console.log('JSON DATA IS SAVED');
        })
        
    }
    readBooksInStockInJSONfile(){
        const fs = require("fs");
        fs.readFile('booksInLibrary.json', function(err, data){
            if(err){
                return console.error(err);
            }
            console.log(`READING DATA FROM JSON FILE`);
           let dataFromJSON =  JSON.parse(data)    
           console.log(dataFromJSON);
        
        })
    }
    
}


let book1 = new Book(1, "isbn23456", "Everyday Italian", "Giada De Laurentiis", "2005", 30.00)
let book2 = new Book(2, "isbn2345678", "Harry Potter", "J K. Rowling", "2001", 29.99)
let book3 = new Book(3, "isbn23456910", "In Search of Lost Time", " Marcel Proust", "2002", 25.00)
let book4 = new Book(4, "isbn2345611123", "Don Quixote", "Miguel de Cervantes", "2005", 24.00)
let book5 = new Book(5, "isbn2345613144", "One Hundred Years of Solitude", "Giada De Laurentiis", "2003", 21.00)
let book6 = new Book(6, "isbn2345613145", " The Great Gatsby", "F. Scott Fitzgerald", "2004", 22.00)
let book7 = new Book(7, "isbn2345613146", " Moby Dic", "GF. Scott Fitzgerald", "2005", 23.00)
let book8 = new Book(8, "isbn2345613147", " Madame Bovary", "Gustave Flaubert", "2006", 24.00)
let book9 = new Book(9, "isbn2345613148", " The Divine Comedy", "Dante Alighieri", "2007", 27.00)
let book10 = new Book(10, "isbn2345613149", "The Brothers Karamazov ", "Fyodor Dostoyevsky", "2008", 29.00)

let user1 = new User('Pesho')
user1.addBooksInmyListOfBooks(book1)
user1.addBooksInmyListOfBooks(book2)
user1.getMyListOfBooks()
user1.borrowBook(book3)
user1.borrowBook(book1)
user1.borrowBook(book4)
user1.borrowBook(book2)
user1.returnBook(book3)

let library = new Library("Ivan Vazov National Library")
library.addBook(book1)
library.addBook(book10)
library.addBook(book9)
library.addBook(book8)
library.searchBook(book1)
library.lendBook(book2)
library.updateBook(book1)
library.deleteBook(book1)
library.lendBook(book1)
library.writeBooksInStockInJSONfile()
library.readBooksInStockInJSONfile()