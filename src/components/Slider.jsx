import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from './card';
import './styles/slider.scss';
import words from './words';
export default function CardSlider()
{
    const [cardIndex, setCardIndex] = useState(1);

    const nextIndex = (next) => {
        console.log(cardIndex);
        setCardIndex(next+1);
    }

    const prevIndex = (active) => {
        console.log(cardIndex);
        if(active === 0 || cardIndex === 1){
            setCardIndex(words.length);
        }else{
            setCardIndex(active);
        }
    }

    const ref = useRef();

    useEffect(() => ref.current && ref.current.focus());

    return (      
        <div className='slider'>
            <Carousel
                autoPlay={false}
                next={(next,active)=>nextIndex(next,active)}
                prev={(prev,active)=>prevIndex(prev,active)}
                indicators={false}
            >
                {
                    words.map((w) => 
                        <Card cardRef={ref}  word={w.word}
                        preposition={w.preposition} transcription={w.transcription} translation = {w.translation}/>
                    )
                }
            </Carousel>
            <p className='slider__counter'>{cardIndex}/{words.length}</p>
        </div> 
        
        
    )
}

