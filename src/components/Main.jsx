import React from "react";
import Table from "./table";
import CardSlider from "./Slider";
import Loader from "./loader";
import { useWords } from "../context/WordsContext";
export default function Main(){
    const {words} = useWords();
    return(
        <>
        {words ?  <><div>
          <CardSlider/>
        </div>
        <div>
            <Table/>
        </div></> : <Loader/> }
        
        </>
    )
}