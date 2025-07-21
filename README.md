 *** SIMPLE REACT COUNTER APP:


A basic counter application built using React.js. It demonstrates the use of useState for state management and event handling in a functional component.


## Features:
Increment the counter value

Clean UI with inline styling

Beginner-friendly structure


## Tech Stack:
React.js (with useState)

JavaScript (ES6)

Inline CSS (in JSX)


## OUTPUT OF THIS CODE:

<img width="681" height="895" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/397d9b12-6936-46c3-a073-9f1d61916f65" />



## WHAT I LEARN FROM THIS CODE:

Learned how to type function to increment the count "  const handleIncrement = () => {
    setCount(count + 1);"

Learned more css syntax




## LINE BY LINE EXPLANATION:   

A)       import React, { useState } from 'react'; means
Imports React and the useState hook from the React library.
useState is used to manage state variables within the component.

.. function Counter() {   means
Defines a functional React component named Counter.
jsx
 .. const [count, setCount] = useState(0);  means 
Declares a state variable count, initialized with 0.
setCount is a function to update count.
This variable keeps track of the current count displayed on the page.



B)     // Function to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };   means 
  
Defines a function called handleIncrement:
When invoked, it increases the current count by 1 using setCount(count + 1).
jsx
 
 ..return (  means
Begins the JSX block to define what this component renders.


C)    <div style={{ textAlign: 'center', marginTop: '50px' }}>  means

Creates a <div> container with inline styles:
textAlign: 'center' aligns all content inside to the center.
marginTop: '50px' adds space above the container to position it lower down the page.


D)         <h1>Counter App</h1>
Displays a heading titled "Counter App".
jsx
      
      
..<p style={{ fontSize: '24px' }}>Count: {count}</p> means
      
Shows a paragraph with the current count:
Sets font size to 24 pixels.
Displays "Count: " followed by the current value of count.



E)     <button onClick={handleIncrement} style={{ fontSize: '16px', padding: '10px 20px' }}>
        Increment
      </button>  means
      
Renders a button labeled "Increment."
The onClick event handler is set to trigger the handleIncrement function when clicked.
Button styles set font size to 16px and padding around the text.



F)       </div>
  );
} means

Closes the <div> container and the return JSX expression.
jsx

..export default Counter;
Exports the Counter component as the default export for use in other parts of the app.






