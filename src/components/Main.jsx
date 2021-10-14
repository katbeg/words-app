import React from "react";
import Table from "./table";
import Loader from "./loader";
import { useWords } from "../context/WordsContext";
export default function Main(){
    const {words, loaded} = useWords();
    return(
        <>
        {loaded ?  <Loader/> : words && <>
        <div>
            <Table/>
        </div></>}
        </>
    )
}