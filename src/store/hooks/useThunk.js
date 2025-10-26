import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";

//using the below useThunk has Generic and used for fetching users and setting
//the loading status false & using the same useThunk for creating User.

export function useThunk(thunk) {
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const runThunk = useCallback(() => {
        setIsLoading(true);
        dispatch(thunk())
            .unwrap()
            .then(() => {
                console.log("SUCESS");
            })
            .catch(error => {
                setError(error.message);
                console.log('ERROR');
            })
            .finally(()=>setIsLoading(false));
    }, [dispatch,thunk]);
    return [runThunk, isLoading, error];
}