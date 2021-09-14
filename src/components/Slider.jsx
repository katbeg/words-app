import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from './card';

export default function CardSlider(props)
{
    return (
        <Carousel
            autoPlay={false}
        >
            {
                props.words.map((w) =>
                    <Card  word={w.word} 
                    preposition={w.preposition} transcription={w.transcription} translation = {w.translation}/>
                )
            }
        </Carousel>
    )
}

