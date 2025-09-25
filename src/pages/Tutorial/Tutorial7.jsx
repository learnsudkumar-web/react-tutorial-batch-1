import React, { useMemo, useState, useCallback, useEffect } from "react";
import Lecture3 from "../Lectures/Lecture3";

const Tutorial7 = () => {
  console.log("Component rendered!");

  const [count, setCount] = useState(0);
  const [value, setValue] = useState("start");

  // Some examples of slow functions
  const largeCalculation = () => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum = sum + i;
    }
    sum = sum + count;
    return sum;
  };

  const x = useMemo(largeCalculation, [count]);

  function doSomething() {
    setTimeout(() => {
      console.log("I did something!", " I printed- ", value);
    }, 10000);
  }

  const letsDoSomething = useCallback(doSomething, [value]);
  // letsDoSomething();

  function slowFibonacci(n) {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2) + count;
  }

  const cachedSlowFibonacci = useCallback(slowFibonacci, [count]);
  // cachedSlowFibonacci();

  // console.log("Slow Fibonacci: ", slowFibonacci(400));

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const cachedIsPrime = useCallback(isPrime, []);

  // console.log(isPrime(count));

  function expensiveSort() {
    const arr = Array.from({ length: 500000 }, () => Math.random());
    return arr.sort((a, b) => a - b);
  }

  const cachedExpensiveSort = useMemo(expensiveSort, []);
  // console.log(expensiveSort());

  return (
    <div>
      <div className="bg-secondary p-3">
        <h4>Tutorial 7: React Topics</h4>
        <ul className="list-group">
          <li className="list-group-item">
            useMemo & useCallback practice questions
          </li>
          <li className="list-group-item">useContext</li>
          <li className="list-group-item">React Router</li>
        </ul>
      </div>

      <p>Current value of x: {x}</p>

      <button
        className="btn btn-primary btn-lg my-3 mx-2"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>

      <div className="form-group px-2">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p className="mx-2">Current Value: {value}</p>
      {/* <Lecture3
        cachedIsPrime={cachedIsPrime}
        cachedExpensiveSort={cachedExpensiveSort}
      /> */}
    </div>
  );
};

export default Tutorial7;
