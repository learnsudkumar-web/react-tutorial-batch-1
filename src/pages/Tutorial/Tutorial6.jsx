import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const Tutorial6 = () => {
  console.log("Tutorial 6 has rendered!");
  const [count, setCount] = useState(0);
  const [mySum, setMySum] = useState(0);

  const emailRef = useRef();
  const htmlRef = useRef();
  const renderCount = useRef(0);
  const prevCount = useRef(count);

  const handleCounter = (val) => {
    setCount(count + val);
  };

  //   a, b, sum

  //   sum = a + b;
  //   a =1, b = 2;
  //   sum = 3;

  //   a = 1, b =5;

  //   sum = 6

  //   a = 1, b = -2;
  //   sum = -1;

  // function addOrSubstract(d) {
  //   let x = 10;
  //   d = 1;
  //   d = -1;

  //   x = x + d;
  //   console.log(x);
  // }

  //   function outer(){
  //     return handleCounter(1);
  //   }

  //   let inner = outer();
  // //   inner();

  //   let x= (y) => y

  // Syntax of useEffect
  useEffect(() => {
    //code inside will run on every re-render
  });

  // run the code inside on every render
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  //code inside this will run only on first render - equivalent to onLoad - Page Load
  useEffect(() => {
    emailRef.current.focus();
    setTimeout(() => {
      htmlRef.current.innerHTML = "Tutorial 6 Form";
    }, 3000);
    // document.getElementById("exampleInputEmail1").focus();
  }, []);

  // To perform a sideeffect based on the dependency - or, to Update
  useEffect(() => {
    prevCount.current = count;
    console.log("Changed value of count is: ", count);
  }, [count]);

  // Cleanup the values - performing the task right before unmounting
  useEffect(() => {
    // let timer = setInterval(() => {
    //   console.log("Hello");
    // }, 1000);

    return function () {
      console.log("Component unmounted!");
      //   clearInterval(timer);
    };
  }, []);

  //   React Lifecycle
  //   1. Mounting
  //   2. Update
  //   3. UnMounting

  //Lecture 6 - here onwards
  // function addOrSubstract(d) {
  //   // let x = 0;
  //   console.log(count + d);
  // }
  function sum1() {
    return 11;
  }
  function sum2() {
    return 12;
  }
  function sum3() {
    // some data is coming from api (server)
    return 13;
  }
  function sum4() {
    return 14;
  }
  function sum() {
    let x = sum1() + sum2() + sum3() + sum4();
    return count + 5 + x;
  }

  const mySum1 = useMemo(sum, [count]);
  console.log(mySum1);
  useEffect(() => {
    setMySum(mySum1);
  });

  //useCallback

  function sumC(d) {
    console.log("Hello ", count + d);
  }

  const mySum2 = useCallback(sumC, [count]);

  return (
    <div>
      <div className="bg-secondary p-3">
        <h4>Tutorial 6: React Topics</h4>
        <p>This component was re-rendered {renderCount.current} times.</p>
        <ul className="list-group">
          <li className="list-group-item">useMemo</li>
          <li className="list-group-item">useCallback</li>
          <li className="list-group-item">useContext</li>
        </ul>
      </div>

      <h1 className="px-5 py-2" ref={htmlRef}>
        Forms{" "}
      </h1>
      <div className="px-5">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              ref={emailRef}
              type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>

            <input
              // ref={}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Count</label>
            {/* count */}
            <input
              value={count}
              onChange={(e) => handleCounter(parseInt(e.target.value))}
              type="number"
              className="form-control"
              id="exampleInputNumber1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="p-5">
          <button className="btn btn-primary" onClick={() => handleCounter(1)}>
            Increment +{" "}
          </button>
          <h5>
            The current count is: {count} and the previous count was{" "}
            {prevCount.current}
          </h5>
          <button className="btn btn-primary" onClick={() => handleCounter(-1)}>
            Decrement -
          </button>
        </div>

        {/* {count === 0 ? <ChotaComponent /> : null} */}

        {/* Lecture 6 - here onwards */}
        <button
          onClick={() => mySum2(5)}
          className="btn btn-warning text-align-center mb-5"
        >
          Add or Substract (5)
        </button>
        <p>Value of MySum: {mySum}</p>
      </div>
    </div>
  );
};

export default Tutorial6;

function ChotaComponent() {
  // Cleanup the values - performing the task right before unmounting
  useEffect(() => {
    let myCount = 0;
    let timer = setInterval(() => {
      myCount = myCount + 1;
      console.log("Hello ", myCount);
    }, 1000);

    return function () {
      console.log("Component unmounted!");
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>I'm a chota component!</h1>
    </>
  );
}
