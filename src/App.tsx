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
                src="/kirby-has-big-shoes-they-do-not-fit-his-little-guy-feet-v0-bk7wxlgx2lbc1.png"
                alt="A silly lil guy"
                style={{ maxWidth: "300px" }}
            />
        </div>
    );
}

export function AppList(): React.JSX.Element {
    return (
        <div>
            Here is a list of true facts:
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
                        Second column.
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
            <p>Xander is cool and epic. Hello World</p>
            <AppHeading />
            <AppPicture />
            <AppList />
            <AppButton />
            <AppColumns />
        </div>
    );
}

export default App;
