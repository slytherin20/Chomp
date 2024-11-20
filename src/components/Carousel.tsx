'use client';
import { useEffect,useState } from 'react';
import { images } from '../../constants';


export default function Carousel(){
    const [slide,setSlide] = useState<number>(0);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setSlide((slide+1)%4);
        },1500);
       return ()=>{
        clearTimeout(timer)
       }
    },[slide]);
    return (
        <section>
            <div className='w-full h-screen blur-sm' data-testid="carousel-imgs">
            <img src={images[slide].url} alt={images[slide].desc} className='h-full w-full' data-testid={`slide-${slide}`} />
            </div>
        </section>
    )
}