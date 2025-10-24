import { render, screen, act } from "@testing-library/react";
import DynamicTextIntro from "../intro/DynamicTextIntro";
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe("Dynamic Typing Test", () => {
    beforeEach(() => {
        jest.clearAllTimers();
    });
    
    it("is moving forward when there are characters left", () => {
        render(<DynamicTextIntro />);

        for (let i = 0; i < 5; i++) {
            act(() => {
                jest.advanceTimersByTime(100);
            });
        }
        
        const updatedElement = screen.getByTestId("typing-test");
        expect(updatedElement.textContent).toMatch(/ a sof/);
    });
    
    it("is moving backwards after word is complete and starts again", () => {
        render(<DynamicTextIntro />);
        
        // Type complete phrase (20 characters * 100ms + 2000 wait time + 1000)
        for (let i = 0; i < 50; i++) {
            act(() => {
                jest.advanceTimersByTime(100);
            });
        }
        
        const updatedElement = screen.getByTestId("typing-test");
        expect(updatedElement.textContent).toMatch(/ a softwar/);
    });
});