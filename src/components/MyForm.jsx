import React, { forwardRef, useRef } from "react";

const MyForm = forwardRef((props, ref) => {
  const inputRef = useRef();
  const handleBtnClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div ref={ref}>
      <input ref={inputRef} type="text" id="text" />
      <button onClick={handleBtnClick} id="btn">
        Click Me
      </button>
    </div>
  );
});

export default MyForm;
