'use client';

import { ChangeEvent, useCallback, useState } from "react";
import { urls } from "../../endpoints";
import Autocomplete from "./Autocomplete";

export default function SearchBox(){
    const [results,setResults] = useState([]);

    const debouncedFetchResults = useCallback(debounce(fetchResults,500),[]);
    function debounce(fn:(s:string)=>void,d:number){
        let timer:NodeJS.Timeout;
        return (s:string)=>{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn(s);
            },d);
        }
    }
    function changeInput(e:ChangeEvent<HTMLInputElement>){
        let value = e.target.value;
        debouncedFetchResults(value);
    }
    async  function fetchResults(searchText:string){
    const Api_key = process.env.NEXT_PUBLIC_API_KEY
        try{
            const res = await fetch(`${urls.autocomplete}?number=10&query=${searchText}`,{
                headers:{
                    'x-api-key': `${Api_key}`
                }
            });
            if(!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setResults(data)
        }
        catch(e:any){
            console.log(e)
        }
    }
   
    return <section className="absolute z-10 top-[45%] left-[40%] w-96" data-testid="search-box">
        <input type="text" className="w-full h-10" placeholder="Search Recipe" onChange={changeInput} />
        
        {
            results.length>0 && <Autocomplete data={results} />
        }
    </section>
}