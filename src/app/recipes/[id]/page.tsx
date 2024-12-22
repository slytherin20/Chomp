import { urls } from "../../../../endpoints";
import Error from "./error";
import {  extendedIng, RecipeInfo } from "./Recipe.interfaces";


export default async function RecipeInformation({params}:{params:{id:string}}){
    let {id} = await params;
    let api = process.env.NEXT_PUBLIC_API_KEY
    let res = await fetch(`${urls.recipe}/${id}/information`,{
        headers:{
            'x-api-key':`${api}567`
        }
    });
    let info:RecipeInfo= await res.json();
    
    if(info.code && info.code!=200) return <Error error={info} />
    return <main className="recipe-page pt-16 text-center m-8">
        <h1 className="text-4xl" data-testid="recp-title">{info.title}</h1>
        <ul className="cuisines-list m-4" data-testid="recp-cuisines">
            {
                info?.cuisines?.map((item:string)=> <li className="cuisines  inline border mx-4 my-4 p-1 border-lime-500 rounded-md" key={item} >{item}</li>)
            }
        </ul>
        <img src={info?.image} alt={info.title} className="mx-auto" data-testid="recp-img" />
        <section className="mini-info text-left">
            <ul>
                {
                    info.dishTypes && 
                <li className="m-4">
                    <h3 className="b text-lg">Ideal For:</h3>
                    <ul className="pl-4" data-testid="recp-type">
                        {
                            info?.dishTypes.map((type:string)=> <li key={type} className="list-decimal" >{type}</li>)
                        }
                    </ul>
                </li>
                }
                {
                    info.readyInMinutes && 
                <li className="m-4">
                    <h3 className="b text-lg">Duration:</h3>
                    <span data-testid="recp-min">{info?.readyInMinutes} mins</span>
                </li>
                }
                {
                    info.servings &&
                <li className="m-4">
                    <h3 className="b text-lg">Servings:</h3>
                    <span data-testid="recp-serving">{info?.servings}
                    </span>
                </li>
                }
            </ul>
        </section>
        { 
            info.summary && <section className="mt-8">
                <p className="text-lg" data-testid="recp-summary">{info.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </section>
        }
        {
            info.extendedIngredients && <section className="text-left mt-12">
                <h2 className="text-xl b">Ingredients:</h2>
                <ul data-testid="recp-ing">
                    {
                        info.extendedIngredients.map((ing:extendedIng)=> <li key={ing.id} className="list-disc">{ing.original}</li>)
                    }
                </ul>
            </section>
        }
        {
            info.instructions && <section className="text-left mt-12">
                <h2 className="b text-xl">Instructions:</h2>
                <ul data-testid="recp-instructions">
                    {info.instructions.replace(/<\/?[^>]+(>|$)/g, "")}
                </ul>
            </section>
        }
    </main>
}