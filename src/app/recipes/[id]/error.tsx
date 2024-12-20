'use client';

import { useEffect } from "react";

export default function Error({error}:{error:Error}){

    useEffect(()=>{
        console.log(error)
    },[error])
    return <article className="text-4xl pt-56">Error Fetching Recipe info</article>
}