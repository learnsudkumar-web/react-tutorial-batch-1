import React, { useContext, useEffect } from "react";
import Tutorial8a from "./tutorialComponents/Tutorial8a";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Tutorial8 = (props) => {
  const userInfo = useContext(AppContext);
  const Tutorial8Child = WithBorder(Tutorial8a);

  useEffect(() => {
    console.log("User Info: ", userInfo);
  });
  return (
    <div>
      <button className="btn btn-danger">
        <Link className="text-white" to={"/"}>
          Go to Homepage
        </Link>
      </button>
      <h1>Tutorial 8 : useContext</h1>
      <p>Below is the child Component - Tutorial8a</p>
      <p>
        User is : {userInfo.isLoggedIn ? userInfo.username : "Not Logged In!"}{" "}
      </p>
      <Tutorial8Child name={props.name} />
    </div>
  );
};

export default Tutorial8;

export function WithBorder(Comp) {
  return function (props) {
    return (
      <div className="m-5 p-5" style={{ border: "5px solid red" }}>
        <Comp {...props} />
      </div>
    );
  };
}
