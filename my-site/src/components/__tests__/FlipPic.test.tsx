import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlipPic from '../FlipPic';

describe("Picture Flipping Test", () => {
    const frontContent = (
        <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic.png`} alt="Front" />
    );
    
    const backContent = (
        <img src={`${process.env.PUBLIC_URL}/images/intro/intro-pic-char.png`} alt="Back" />
    );
    beforeEach(()=>{
        
    })
    it("flips when clicked, front and back", () => {
        render(<FlipPic frontContent={frontContent} backContent={backContent}/>)
        const picture = screen.getByTestId("flip-pic");
        expect(screen.getByTestId("flip-pic-front"))
        fireEvent.click(picture)
        expect(screen.getByTestId("flip-pic-back"))
    })
})