import {useState} from 'react';
import useBookContext from "../hooks/use-book-context.js";

function BookCreate() {

    const {createBook} = useBookContext();

    const [title, setTitle] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (<div className="book-create">
        <form onSubmit={onSubmit}>
            <label>Book Name:</label>
            <input type="text" onChange={handleChange} value={title}  />
            <button type="submit">Create</button>
        </form>
    </div>);
}

export default BookCreate;