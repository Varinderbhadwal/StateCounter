import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a state variable called `count`, and a function to update it called `setCount`
  // Initialize `count` with 0
  const [count, setCount] = useState(0);

  return (
    <div id='container'>
      <h1>Counter Program</h1>
      <p>A simple porject to demonstrate counter with useState</p>
      <h2>{count}</h2>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>
        More ++
      </button>

      <button onClick={() => setCount(0)}>
        Reset 0
      </button>

      <button onClick={() => setCount(count - 1)}>
        -- Less
      </button>

      <div id='info'>
        <h3>About This Project</h3>
        <p>This Counter Program is a simple yet functional web application built with <strong>React.js</strong>, designed to help beginners understand the fundamentals of React's component-based architecture and state management. The project showcases how to use React's useState hook to create dynamic, interactive user interfaces.</p>

        <strong>Key Features:</strong>
        <ol className='list'>
          <li>
          <strong>Increment Button:</strong> A button that allows users to increment the counter value by 1 with every click. This demonstrates how user interactions can be handled using event listeners in React.
          </li>
          <li>
          <strong>Reset Button:</strong> A button to reset the counter back to zero. This feature highlights how easy it is to manage and reset state in React.
          </li>
          <li>
          <strong>Decrement Button:</strong> A button to decrement the counter by 1, which gives users full control to adjust the count up or down. This helps demonstrate multiple event handlers working with the same state variable.
          </li>
          <li><strong>State Management with useState:</strong> The core of this app revolves around React's useState hook, which allows the counter value to persist and update dynamically in response to user interactions. This is a fundamental feature of React that allows components to be interactive and responsive to real-time data changes.</li>

          <li><strong>Responsive UI:</strong> The app features a simple, clean user interface that adapts to various screen sizes, providing a seamless user experience on both desktop and mobile devices. While the design is minimalistic, it ensures the functionality is clear and user-friendly.</li>

          <li><strong>Footer Section:</strong> The app includes a footer that displays the copyright notice. This helps in demonstrating the structural layout of a React component and highlights how different parts of the app can be separated into distinct sections for maintainability.</li>
        </ol>

        <strong>Project Goals:</strong>
        <ul className='list'>
          <li>
          To provide a hands-on learning experience with React.
          </li>
          <li>
          To introduce state management through the useState hook.
          </li>
          <li>
          To help new developers understand how to create reusable components and manage user events in a React-based application.
          </li>
          <li>
          To demonstrate how simple functionality can be expanded into fully functional, interactive applications with clean, maintainable code.
          </li>
        </ul>

        <hr></hr>
        <h3>About the Author</h3>
        <p>
        This project was developed by <strong>Varinder Pal Singh</strong>, a beginner full stack developer proficient in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a focus on continuous learning and improving development skills, Varinder aims to build intuitive, user-friendly applications while deepening knowledge in web technologies. This counter program is one of the many projects undertaken to explore and apply core principles of React and full stack development.
        </p>
      </div>

      <footer>Copyright 2024 &copy; Varinder Pal Singh</footer>
    </div>
  );
}

export default App;
