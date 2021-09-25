import React, { Fragment, useState, useEffect, useRef } from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from './card';
import './styles/slider.scss';
import words from './words';
export default function CardSlider()
{
    const [cardIndex, setCardIndex] = useState(1);
    const nextIndex = (next) => {
        setCardIndex(next+1);
    }
    const prevIndex = (active) => {
        if(active === 0){
            setCardIndex(words.length);
        }else{
            setCardIndex(active);

        }
    }

    const ref = useRef();

    useEffect(() => ref.current && ref.current.focus());

    return (      
        <Fragment className='slider'>
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
        </Fragment> 
        
        
    )
}

