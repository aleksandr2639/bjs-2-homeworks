class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else this._state = number;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName) {
        const findBook = this.findBookBy('name', bookName)
        if (findBook) {
            this.books.splice(this.books.indexOf(findBook), 1);
        }
        return findBook
    }

}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {}
    }

    addMark(mark, subject) {
        if (this.marks.hasOwnProperty(subject) != true) {
            this.marks[subject] = [];
        }
        if ((mark < 2) && (mark > 5)) {
            return
        } else this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject) != true) {
            return 0
        } else return this.marks[subject].reduce((accum, item) => accum + item) / this.marks[subject].length
    }

    getAverage() {
        let arr = Object.keys(this.marks);
        let sum = 0
        let lengthSubject = 0
        for (let i = 0; i < arr.length; i++) {
            sum += this.marks[arr[i]].reduce((accum, item) => accum + item)
            lengthSubject += this.marks[arr[i]].length
        }
        return sum / lengthSubject

        if (this.marks.hasOwnProperty(subject) != true) {
            return 0
        }
    }
}