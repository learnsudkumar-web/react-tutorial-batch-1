import React, { Suspense, useState } from "react";

const Box = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mybox />
    </Suspense>
  );
};

export default Box;

const Mybox = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ default: () => <div>Box</div> });
    }, 0);
  });
});
