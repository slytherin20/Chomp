const { render,screen } = require("@testing-library/react")
import { errorMsg, recipeInfo } from "../__mock__/recipeData";
import RecipeInformation from "../src/app/recipes/[id]/page"
import '@testing-library/jest-dom'
describe('Recipe Page',()=>{
    
    it("recipe information is displayed",async ()=>{
        global.fetch = jest.fn(()=>{
            return Promise.resolve({
                json: ()=>Promise.resolve(recipeInfo)
            })
        })
        let props={
            params:{id:593415}
        }
        let Page =await RecipeInformation(props);
        render(Page);
        let title = screen.getByTestId("recp-title");
        expect(title.innerHTML).toBe('Curried Red Kidney Beans with Paneer (Paneer Rajma)');
        let cuisines = screen.getByTestId('recp-cuisines');
        expect(cuisines.children.length).toBe(0)
        let img = screen.getByTestId('recp-img');
        expect(img.src).toBe('https://img.spoonacular.com/recipes/593415-556x370.jpg');
        let type = screen.getByTestId('recp-type');
        expect(type.children.length).toBe(1)
        let min = screen.getByTestId('recp-min');
        expect(min.innerHTML).toBe('45 mins')
        let serving = screen.getByTestId('recp-serving');
        expect(serving.innerHTML).toBe('10')
        let summary = screen.getByTestId('recp-summary');
        expect(summary).toBeInTheDocument();
        let ing = screen.getByTestId('recp-ing');
        expect(ing.children.length).toBe(23)
        let instructions = screen.getByTestId('recp-instructions');
        expect(instructions).toBeInTheDocument();
    })
    it("error message is displayed",async ()=>{
        global.fetch = jest.fn(()=>{
            return Promise.resolve({
                json: ()=>Promise.resolve(errorMsg)
            })
        })
        let props={
            params:{id:"fytf"}
        }
        let Page =await RecipeInformation(props);
        render(Page);
        let err = screen.getByTestId("error-msg");
        expect(err).toBeInTheDocument();
        expect(err.innerHTML).toBe("Error Fetching Recipe info")
    })
})