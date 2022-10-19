import React from 'react'

type AppProps = { num: number };

const App = ({num}: AppProps) => {
  return (
    <>
      <h1>React is working</h1>
      <p>Total Number: {num}</p>
    </>
  );
};

export default App;
