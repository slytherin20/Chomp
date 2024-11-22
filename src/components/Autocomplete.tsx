import { SearchResults } from "./Home.interfaces"
export default function Autocomplete({data}:{data:SearchResults[]}){
    return <section className="bg-white relative z-20 shadow-sm w-full">
        <ul data-testid="search-result-list">
            {
                data.map((res:SearchResults)=> <li key={res.id}>{res.title}</li>)
            }
        </ul>
    </section>
}