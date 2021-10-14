import { createContext, useContext, useState, useEffect } from "react";

const WordsContext = createContext();

export const useWords = () => {
    return useContext(WordsContext);
}

export const WordsProvider = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [words, setWords] = useState();

    useEffect(() => {
        fetch('/api/words')
            .then(setLoaded(true))
            .then((response) => response.json())
            .then((response) => setWords(response))
            .then(setLoaded(false))
    }, []);

    return(
            <WordsContext.Provider value={{words, setWords, loaded, setLoaded}}>
                {props.children}
            </WordsContext.Provider>
        )
}

