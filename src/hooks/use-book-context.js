import {useContext} from "react";
import BookContext from "../context/bookContext.js";

function useBookContext() {
    return useContext(BookContext);
}

export default useBookContext;