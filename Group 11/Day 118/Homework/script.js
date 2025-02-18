class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`)
        } else {
            console.log(`${this.title} is currently not available.`)
        }
    }

    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`${this.title} has been returned.`)
        } else {
            console.log(`${this.title} was not borrowed.`)
        }
    }
}

class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year)
        this.author = author
        this.genre = genre
    }

    getSummary() {
        return `${this.title} is a ${this.genre} book written by ${this.author}. It was published in ${this.year}.`;
    }
}

class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `${this.title} is a magazine (Issue #${this.issueNumber}) published in ${this.year}.`
    }
}

const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction")
const magazine1 = new Magazine("National Geographic", 2022, 101)

book1.borrowItem()
book1.borrowItem()
book1.returnItem()
book1.returnItem()

magazine1.borrowItem()
magazine1.returnItem()


console.log(book1.getSummary())
console.log(magazine1.getSummary())
