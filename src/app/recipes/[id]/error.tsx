'use client';

import { useEffect } from "react";
import { errorRes } from "./Recipe.interfaces";

export default function Error({error}:{error:errorRes}){

    useEffect(()=>{
        console.log(error)
    },[error])
    return <article className="text-4xl pt-56" data-testid="error-msg">Error Fetching Recipe info</article>
}