import Link from "next/link"
import { SearchResults } from "./Home.interfaces"
export default function Autocomplete({data}:{data:SearchResults[]}){
    return <section className="bg-white relative z-20 shadow-sm w-full">
        <ul data-testid="search-result-list">
            {
                data.map((res:SearchResults)=> <li key={res.id}><Link href={`/recipes/`+res.id}>{res.title}</Link></li>)
            }
        </ul>
    </section>
}