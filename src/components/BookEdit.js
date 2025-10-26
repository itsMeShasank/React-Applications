import {useState} from "react";
import useBookContext from "../hooks/use-book-context.js";

function BookEdit({ book,handleSubmit }) {
    const [titlePiece, setTitlePiece] = useState(book.title);
    const { editBookById } = useBookContext();

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit();
        editBookById(book.id, titlePiece);
    }
    const handleOnChange = (event) => {
        setTitlePiece(event.target.value);
    }

    return  (
        <div className="book-edit">
            <form onSubmit={onSubmit}>
                <label>Title:</label>
                <input className="input" onChange={handleOnChange} value={titlePiece} />
                <button className="button is-primary">save</button>
            </form>
        </div>
    )
}
export default BookEdit;