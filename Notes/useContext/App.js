import React, { createContext, useState } from 'react';
import HomeScreen from './Home';

// Create a context for the counter
export const CounterContext = createContext();

// Create a provider component
export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <HomeScreen />
    </CounterContext.Provider>
  );
};
export default App;
