import React, { useState } from "react";
import Lecture1 from "./Lecture1";
import Lecture2 from "./Lecture2";
import Lecture3 from "./Lecture3";
import Lecture4 from "./Lecture4";

const Lectures = () => {
  const [lectures, setLectures] = useState(reactLectures);
  const [renderedNode, setRenderedNode] = useState(
    lectures.find((node) => node.isActive)
  );
  const handleMenuClick = (e, menuId) => {
    e.preventDefault();
    if (lectures && lectures.length > 0) {
      let currentNode = lectures.find((node) => node.id === menuId);
      setRenderedNode(currentNode);
      setLectures((prev) => {
        return prev.map((node) => {
          node.id === menuId ? (node.isActive = true) : (node.isActive = false);
          return node;
        });
      });
    }
  };
  return (
    <div>
      <div className="javascript-lectures text-light bg-primary py-3 px-5 align-items-center d-flex justify-content-between">
        <h2>
          You can access JavaScript Lectures, codes, assignments and examples
          here -
        </h2>
        <a
          href="https://codesandbox.io/p/sandbox/javascript-html-css-tutorial-g7sqkd"
          target="_blank"
        >
          <button className="btn btn-warning btn-md">
            Javascript Lectures
          </button>
        </a>
      </div>
      <div className="react-lectures px-5 py-2">
        <div className="react-lectures-heading border-bottom d-flex justify-content-center">
          <h1>React Lectures</h1>
        </div>
        <div className="d-flex">
          <div
            className="col-3 px-3 py-4"
            style={{ borderRight: "1px solid grey" }}
          >
            {lectures &&
              lectures.length > 0 &&
              lectures.map((item) => {
                if (!item.disabled) {
                  return (
                    <div className="lecture-menu-item mb-1 ">
                      <button
                        onClick={(e) => handleMenuClick(e, item.id)}
                        className={`btn ${
                          item.isActive ? "btn-primary" : "btn-secondary"
                        } w-100`}
                      >
                        {item.name}
                      </button>
                    </div>
                  );
                }
              })}
          </div>
          <div className="col-9">
            <div className="rendered-lecture-data p-5">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th style={{ width: "100px" }}>Lecture</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {renderedNode && (
                    <tr>
                      <td>{renderedNode.name}</td>
                      <td>{renderedNode.desc}</td>
                      <td>{renderedNode.date}</td>
                      <td>{renderedNode.status}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="lecture-notes">
                {renderedNode && renderedNode.lectureComp
                  ? renderedNode.lectureComp
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;

const reactLectures = [
  {
    id: "lecture1",
    name: "Lecture 1",
    desc: "Project Setup, Intro to React, Node Js, DOM, Virtual DOM, Single Page Application, Conditional Rendering",
    date: "16/09/2025",
    status: "Done",
    disabled: false,
    isActive: true,
    lectureComp: <Lecture1 />,
  },
  {
    id: "lecture2",
    name: "Lecture 2",
    desc: "Conditional Rendering, use of Map, filter, Objects, Arrays to dynamically render data on the screen",
    date: "17/09/2025",
    status: "Done",
    disabled: false,
    isActive: false,
    lectureComp: <Lecture2 />,
  },
  {
    id: "lecture3",
    name: "Lecture 3",
    desc: "Ternary Operator, Event Handling, Props, Props Desctructuring, Importance of key in mapped lists/elements, Higher Order Components",
    date: "18/09/2025",
    status: "Done",
    disabled: false,
    isActive: false,
    lectureComp: <Lecture3 />,
  },
  {
    id: "lecture4",
    name: "Lecture 4",
    desc: "Props and Higher order component Revision, Form Handling, Hooks, useState, useRef, Controlled Components",
    date: "22/09/2025",
    status: "Done",
    disabled: false,
    isActive: false,
    lectureComp: <Lecture4 />,
  },
];
