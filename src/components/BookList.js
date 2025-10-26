import BookShow from './BookShow.js';
import useBookContext from "../hooks/use-book-context.js";

function BookList() {
    const { books } = useBookContext();

    const showBooks = books.map(book => {
        return <BookShow key={book.id} book={book}/>;
    })
    return <div className="book-list">{showBooks}</div>
}

export default BookList;