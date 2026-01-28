import React, { useState, useEffect } from "react";
import introData from '../../data/intro.json';

function DynamicTextIntro() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const {dynamic_text_options} = introData;
        const currentFullText = dynamic_text_options[currentTextIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                if (charIndex < currentFullText.length) {
                    setCurrentText(currentFullText.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Pause at end before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting backwards
                if (charIndex > 0) {
                    setCurrentText(currentFullText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Move to next text option
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % dynamic_text_options.length);
                }
            }
        }, isDeleting ? 50 : 100); // Faster deletion than typing

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentTextIndex]);

    return (
        <span className="typing">
            <span data-testid="typing-test"> {currentText}</span>
            <span className="cursor">|</span>
        </span>
    );
}

export default DynamicTextIntro;