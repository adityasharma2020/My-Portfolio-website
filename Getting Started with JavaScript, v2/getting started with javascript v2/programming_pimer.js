// todo :  define add favourite book function, and then print function which prints  books which have great word in them.

let favouriteBooks = [];

function addFavouriteBooks(bookName){
    if(!bookName.includes('great') == true){
        favouriteBooks.push(bookName);
    }
}


function printFavouriteBooks(){
    console.log(`favourite books: ${favouriteBooks.length}`);
    for(let i=0;i<favouriteBooks.length;i++){
        console.log(favouriteBooks[i])
    }
}


addFavouriteBooks("first")
addFavouriteBooks("secound book is great")
addFavouriteBooks("third")
addFavouriteBooks("fourth book is great")
addFavouriteBooks("fifth")

//print all  the favourute books
printFavouriteBooks();

let numStudents = 16;
console.log(
    `there are ${numStudents+ "hi"} + hi+students`
)