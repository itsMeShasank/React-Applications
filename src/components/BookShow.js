import BookEdit from './BookEdit'
import {useState} from "react";
import useBookContext from "../hooks/use-book-context.js";

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const {editBookById, deleteBookById } = useBookContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }
    const handleEditClick = (id, title) => {
        setShowEdit(!showEdit);
        editBookById(id,title);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <div className="book-edit"><BookEdit  book={book} handleSubmit={handleEditClick} /></div>
    }
    return <div className="book-show">
        <img src="https://picsum.photos/300/200" alt="book" />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow;