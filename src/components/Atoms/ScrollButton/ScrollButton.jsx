'use client'
import React from "react";

const ScrollButton = ({ targetId }) => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById(targetId);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToNextSection}
            className="cursor-pointer  px-3 py-3 rounded text-white tracking-wider shadow-xl animate-bounce absolute bottom-7"
        >
            <svg
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></path>
            </svg>
        </button>
    );
};

export default ScrollButton;
