import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    /*const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        setBooks(response.data);
    }*/

    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        setBooks(response.data);
    },[]);

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books",{title:title});
        setBooks([...books,response.data]);
    }
    const editBookById = async (id,title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title:title});

        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, ...response.data};
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        const deletedBooks = books.filter(book => book.id !== id);
        setBooks(deletedBooks);
    }

    const valueToShare = {
        books,
        editBookById,
        deleteBookById,
        createBook,
        fetchBooks
    };


    return (
        <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
    )

}

export {Provider};
export default BookContext;