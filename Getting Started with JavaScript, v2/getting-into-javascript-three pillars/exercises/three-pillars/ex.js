class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	addFavoriteBook(bookName){
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	// and `printFavoriteBooks()`
	printFavoriteBooks(){
		console.log(`favourite books : ${String(this.favoriteBooks.length)}`);
		for(let bookName of this.favoriteBooks){
			console.log(bookName);
		}
	}
}

// function addFavoriteBook(bookName) {
// 	if (!bookName.includes("Great")) {
// 		favoriteBooks.push(bookName);
// 	}
// }

// function printFavoriteBooks() {
// 	console.log(`Favorite Books: ${favoriteBooks.length}`);
// 	for (let bookName of favoriteBooks) {
// 		console.log(bookName);
// 	}
// }

function loadBooks(Bookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API,function onBooks(bookNames){
		for(let bookname of bookNames){
			Bookshelf.addFavoriteBook(bookname);  //using implicit binding it invoke the add function
		}
		Bookshelf.printFavoriteBooks();
	});
	//inline function or named function expression.

}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf(); //for instantiating the instance of a class.
loadBooks(myBooks); //this will invoke our function

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
