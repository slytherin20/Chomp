export interface Recipe extends extendedIng{
    title:string,
    cuisines:string[],
    image:string,
    dishTypes:string[],
    readyInMinutes:number,
    servings:number,
    summary:string,
    extendedIngredients: extendedIng[],
    instructions:string,
    code?:never,
    status?:never,
    message?:never,
}

export interface extendedIng
    {
        original:string,id:number
    }
export interface errorRes{
    code:number,
    status:string,
    message:string,
    title?:never,
    cuisines?:never,
    image?:never,
    dishTypes?:never,
    readyInMinutes?:never,
    servings?:never,
    summary?:never,
    extendedIngredients?: never,
    instructions?:never
}
export type RecipeInfo= Recipe | errorRes;