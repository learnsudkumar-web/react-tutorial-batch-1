import React, { useRef } from 'react';
import Box from './components/MyComponent';
import MyForm from './components/MyForm';


function App() {
  const formRef = useRef();

  function handleClick() {
    console.log(formRef.current.children);
    const childArray = Array.from(formRef.current.children);
    childArray[0].focus();
    childArray[0].value = "Hello World";
    childArray[1].click();
  }

  return (
    <div>
      <button onClick={handleClick}>Parent Button</button>
      <h1>Hello World</h1>
      <p>This is the Homepage</p>
      <Box />
      <MyForm ref={formRef} />
    </div>
  )
}

export default App;