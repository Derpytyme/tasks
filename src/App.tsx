import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export function AppHeading(): React.JSX.Element {
    return <h1>Why is this text so big?</h1>;
}

export function AppPicture(): React.JSX.Element {
    return (
        <div>
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

export function AppButton(): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export function AppColumns(): React.JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "30px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        First column.
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "30px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "30px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        Third Column
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

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
            <AppHeading />
            <AppPicture />
            <AppList />
            <AppButton />
            <AppColumns />
        </div>
    );
}

export default App;
