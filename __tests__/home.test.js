import { fireEvent, render,screen, waitFor} from '@testing-library/react';
import Home from "../src/app/page";
import '@testing-library/jest-dom';
import {images } from '../constants';
import { act } from '@testing-library/react';
import Header from "../src/components/Header"
import {data } from "../__mock__/searchData"
jest.useFakeTimers();

describe('Home Page is Loading',()=>{
    it('renders carousel',()=>{
        render(<Home />);
        const img = screen.getByTestId('carousel-imgs');
        expect(img).toBeInTheDocument();
    })
    it('Header showing',()=>{
      render(
     <Header />);
      let header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
      const h1 = header.children[0];
      expect(h1.innerHTML).toBe('Chomp');
    })
    it('carousel slides changes after 1.5s',()=>{
        render(<Home />);
    
        let img = screen.getByTestId('carousel-imgs').children[0];
        expect(img.src).toBe(images[0].url);
       
            act(()=>{
                jest.advanceTimersByTime(1500);
            })
            expect(img).toHaveAttribute('src',images[1].url);

            act(()=>{
                jest.advanceTimersByTime(1500);
            })
            expect(img).toHaveAttribute('src',images[2].url);

            act(()=>{
                jest.advanceTimersByTime(1500);
            })
            expect(img).toHaveAttribute('src',images[3].url);
    })
    it('search box is displaying',()=>{
        render(<Home />);
        let searchBox = screen.getByTestId('search-box');
        expect(searchBox).toBeInTheDocument();
    })
})

describe('Autocomplete search results',()=>{
    global.fetch = jest.fn(() => {
        return Promise.resolve({
          json: () => Promise.resolve(data),
          ok:true
        });
      });
    it('Search Result fetches',async ()=>{
        render(<Home />);
        let inputField = screen.getByPlaceholderText('Search Recipe');
        fireEvent.change(inputField,{target:{value:'paneer'}});
        
        await waitFor(()=>{
            let searchItems = screen.getByTestId('search-result-list').children;
            expect(searchItems.length).toBe(10);
        })
      
      
    })
    it('Results are debounced correctly',()=>{
        render(<Home />);
        let inputField = screen.getByPlaceholderText('Search Recipe');
        fireEvent.change(inputField,{target:{value:'p'}});
        fireEvent.change(inputField,{target:{value:'pan'}});
        fireEvent.change(inputField,{target:{value:'panee'}});
        fireEvent.change(inputField,{target:{value:'paneer'}});
        jest.advanceTimersByTime(500);
      
        expect(global.fetch).toHaveBeenCalledTimes(1);
       
    })
})