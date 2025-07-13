import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button onClick={handleIncrement} style={{ fontSize: '16px', padding: '10px 20px' }}>
        Increment
      </button>
    </div>
  );
}

export default Counter;