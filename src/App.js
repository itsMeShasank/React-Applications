import {useEffect} from "react";
import BookList from "./components/BookList.js";
import BookCreate from "./components/BookCreate.js";
import useBookContext from "./hooks/use-book-context.js";

function App() {

    const { fetchBooks } = useBookContext();

    useEffect(() =>{
        fetchBooks()
    },[fetchBooks]);

    return (
        <div className="app">
            <h1>READING LIST</h1>
            <BookList/>
            <BookCreate/>
        </div>
    );
}


export default App;