import  { useState, useEffect, useRef } from 'react';

function ShowPrevValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Initialize the ref to null

  useEffect(() => {
    // After the component renders, update the ref with the current count.
    prevCountRef.current = count;
  }, [count]); // This effect runs only when 'count' changes

  const incrementCount = () => {
    setCount(count + 1);
  };

  const previousCount = prevCountRef.current; // Access the previous value

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount === null ? "Initial Value" : previousCount}</p>
      <button onClick={incrementCount} className='bg-black text-white p-2 px-7'>Increment</button>
    </div>
  );
}

export default ShowPrevValue;