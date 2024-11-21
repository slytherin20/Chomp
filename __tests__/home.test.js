import { render,screen} from '@testing-library/react';
import Home from "../src/app/page";
import '@testing-library/jest-dom';
import {images } from '../constants';
import { act } from '@testing-library/react';
import Header from "../src/components/Header"
jest.useFakeTimers();

describe('Home',()=>{
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
})