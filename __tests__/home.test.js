import { render,screen} from '@testing-library/react';
import Home from "../src/app/page";
import '@testing-library/jest-dom';
import {images } from '../constants';
import { act } from '@testing-library/react';

jest.useFakeTimers();

describe('Home',()=>{
    it('renders carousel',()=>{
        render(<Home />);
        const img = screen.getByTestId('carousel-imgs');
        expect(img).toBeInTheDocument();
    })
    it('carousel slides changes after 1.5s',async ()=>{
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
})