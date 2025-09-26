import React, { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Tutorial9 = () => {
  const dispatch = useDispatch();
  const [myValue, setMyValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("add");
  const myOptions = ["add", "substract", "multiply", "divide"];
  const initialCount = 0;

  function countReducer(state, action) {
    switch (action.type) {
      case "add":
        return (state = state + action.payload);
      case "substract":
        return (state = state - action.payload);
      case "multiply":
        return (state = state * action.payload);
      case "divide":
        return (state = state / action.payload);
      default:
        return state;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, initialCount);

  // Use app selector

  const { users, products } = useSelector((state) => state);
  const allUser = useSelector((state) => state.users);

  console.log("users: ", users);

  const user3 = {
    usr3: {
      name: "User3",
      email: "user3@gmail.com",
    },
  };

  //   useEffect(()=>{
  //     dispatch({type: "addUser"})
  //   },[])

  return (
    <div>
      <h1>Tutorial 9</h1>
      <h5>Current Value of count is: {count}</h5>
      <div className="form-group mb-2">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {myOptions.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className="form-group mb-2">
        <input
          className="form-control"
          type="number"
          value={myValue}
          onChange={(e) => setMyValue(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={() =>
          countDispatch({ type: selectedOption, payload: myValue })
        }
      >
        Click me
      </button>

      <table className="table bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Email</td>
          </tr>
          <tr>
            <td>{users.user1.name}</td>
            <td>{users.user1.email}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => dispatch({ type: "addUser", payload: user3 })}
        className="btn btn-primary"
      >
        Add User
      </button>
    </div>
  );
};

export default Tutorial9;
