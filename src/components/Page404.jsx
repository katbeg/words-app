import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './styles/page404.scss';

export default function Page404(){
    const [imgUrl, setUrl] = useState('');
    const apiKey = 'UUUdD6yktWrzvdILSZPKrw97pnb5rv0n';

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=lost&limit=5&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(json => {
            json.data
                .map(gif => gif.images.fixed_height.url)
                .forEach(url => {
                        setUrl(url);
                })
        })
        .catch(error => console.log(error))
      }, [])

    return(
        <div className='not-found'>
            <h1 className='not-found__title'>Oooops!</h1>
            <h2 className='not-found__info'>404 Page Not Found</h2>
            <img className='not-found__gif' src={imgUrl} alt="Gif error" />
            <Link className='not-found__link' to='/'>Way back home</Link>
        </div>
    )
}