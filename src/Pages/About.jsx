import React from "react";
import Container from "../components/container/Container";

function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
        <Container>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                About This Project
            </h1>
            <p className="text-lg text-gray-600 mb-4">
                Welcome to our project! This platform was created with the goal of helping learners improve their skills, particularly in web development and React. Whether you're just starting your journey or looking to expand your knowledge, this project is designed to support your learning and growth.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Creator: Ranjan Tiwari
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                Hi, I'm Ranjan Tiwari, a Learning Enthusiast and Trainer specializing in React. Teaching and sharing knowledge has always been my passion, and I’ve created this project as part of my continuous learning and teaching journey. My goal is to build a community where students and developers alike can improve their React skills in a practical, hands-on way.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Project Purpose
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                This project is primarily focused on learning and teaching. It serves as a tool for me to experiment with new features, explore modern web development techniques, and help others along the way. Many features are still under development, and several areas need improvement, including:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-4">
                <li>Improved error handling</li>
                <li>More comprehensive feature set</li>
                <li>Bug fixes and optimizations</li>
                <li>Better UI/UX for a seamless user experience</li>
            </ul>

            <p className="text-lg text-gray-600 mb-4">
                While some features are currently incomplete, the project remains a valuable tool for learning and improving your skills. I encourage everyone to contribute, provide feedback, and help make this project a better learning resource for all.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What to Expect
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                Please note that many features are missing or not fully functional yet. Bugs and incomplete functionalities are part of the process, but they provide excellent opportunities to learn about debugging and problem-solving. As we continue to iterate and improve, I appreciate your patience and contributions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get Involved
            </h2>
            <p className="text-lg text-gray-600 mb-4">
                Feel free to explore the project, experiment with the code, and contribute to its development. Whether you're here to learn or help, every contribution is welcome. Let's work together to build something great!
            </p>

            <p className="text-lg text-gray-600 mb-4">
                Thanks for stopping by and happy learning!
            </p>
            </div>
        </Container>
        </div>
    );
}

export default About;
