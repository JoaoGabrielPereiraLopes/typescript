var book = /** @class */ (function () {
    function book(serie, author, available, title) {
        this.serie = serie;
        this.author = author;
        this.available = available;
        this.title = title;
    }
    book.prototype.give = function () {
        if (this.available) {
            this.available = false;
        }
        else {
            console.log('not available');
        }
    };
    book.prototype.take = function () {
        if (!this.available) {
            this.available = true;
        }
        else {
            console.log('this book is available');
        }
    };
    book.prototype.__str__ = function () {
        return [this.author, this.available, this.serie, this.title];
    };
    return book;
}());
var library = /** @class */ (function () {
    function library(books) {
        this.books = books;
    }
    library.prototype.add_book = function (aded) {
        this.books.push(aded);
    };
    library.prototype.describe = function () {
        for (var x = 0; x < this.books.length; x++) {
            console.log(this.books[x]);
        }
    };
    library.prototype.give = function (x) {
        this.books[x].give();
    };
    library.prototype.take = function (x) {
        this.books[x].take();
    };
    return library;
}());
