import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Xander is cool and epic also. Hello World
            </p>
        </div>
    );
}

export function AppHeading(): React.JSX.Element {
    return <h1>heading</h1>;
}

export function AppPicture(): React.JSX.Element {
    return (
        <div>
            <h1>Hello World</h1>
            <img
                src="src\kirby-has-big-shoes-they-do-not-fit-his-little-guy-feet-v0-bk7wxlgx2lbc1.png"
                alt="A silly lil guy"
            />
        </div>
    );
}

export function AppList(): React.JSX.Element {
    return (
        <div>
            Ordered List:
            <ol>
                <li>I like money</li>
                <li>I have lots of money</li>
                <li>My money is infinite</li>
            </ol>
        </div>
    );
}

export default App;
