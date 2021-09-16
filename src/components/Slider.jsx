import React, { Fragment, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from './card';
import './styles/slider.scss';

export default function CardSlider(props)
{
    const [cardIndex, setCardIndex] = useState(1);
    const nextIndex = (next, active) => {
        setCardIndex(next+1);
    }
    const prevIndex = (prev, active) => {
        if(active === 0){
            setCardIndex(props.words.length);
        }else{
            setCardIndex(active);

        }
    }
    return (      
        <Fragment className='slider'>
            <Carousel
                autoPlay={false}
                next={(next,active)=>nextIndex(next,active)}
                prev={(prev,active)=>prevIndex(prev,active)}
                indicators={false}
            >
                {
                    props.words.map((w) => 
                        <Card  word={w.word}
                        preposition={w.preposition} transcription={w.transcription} translation = {w.translation}/>
                    )
                }
            </Carousel>
            <p className='slider__counter'>{cardIndex}/{props.words.length}</p>
        </Fragment> 
        
        
    )
}

