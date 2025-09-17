import React from "react";

const Lecture1 = () => {
  return (
    <div className="lecture-comp">
      <LectureTopic
        heading={"Project Setup"}
        content={
          <>
            <div>
              <ol>
                <li>
                  <strong>Check Node & npm are installed:</strong>
                  <pre>
                    <code>node -v npm -v</code>
                  </pre>
                  (Use an LTS Node version — e.g. 16+ / 18+ recommended.)
                </li>

                <li>
                  <strong>Open a terminal</strong> and change to the folder
                  where you want the project:
                  <pre>
                    <code>cd /path/to/your/projects</code>
                  </pre>
                </li>

                <li>
                  <strong>Create the React app:</strong>
                  <pre>
                    <code>npx create-react-app my-app</code>
                  </pre>
                  <small>To create a TypeScript template instead:</small>
                  <pre>
                    <code>
                      npx create-react-app my-app --template typescript
                    </code>
                  </pre>
                </li>

                <li>
                  <strong>Enter the project folder:</strong>
                  <pre>
                    <code>cd my-app</code>
                  </pre>
                </li>

                <li>
                  <strong>Start the development server:</strong>
                  <pre>
                    <code>npm start</code>
                  </pre>
                  The dev server usually opens your browser at{" "}
                  <code>http://localhost:3000</code>.
                </li>

                <li>
                  <strong>Edit source files:</strong>
                  <p>
                    Open <code>src/App.js</code> (or <code>src/App.tsx</code>{" "}
                    for TypeScript) in your editor — changes will hot-reload in
                    the browser.
                  </p>
                </li>

                <li>
                  <strong>Create a production build:</strong>
                  <pre>
                    <code>npm run build</code>
                  </pre>
                </li>

                <li>
                  <strong>
                    Serve the production build locally (optional):
                  </strong>
                  <pre>
                    <code>
                      npx serve -s build # or if 'serve' is installed globally:
                      serve -s build
                    </code>
                  </pre>
                </li>

                <li>
                  <strong>Optional extras:</strong>
                  <ol>
                    <li>
                      Initialize Git:
                      <pre>
                        <code>
                          git init git add . git commit -m "Initial commit"
                        </code>
                      </pre>
                    </li>
                    <li>
                      Change the dev server port:
                      <pre>
                        <code>PORT=3001 npm start</code>
                      </pre>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Lecture1;

const LectureTopic = ({ heading, content }) => {
  return (
    <div className="lecture-topic">
      <h3>{heading}</h3>
      <div>{content}</div>
    </div>
  );
};
