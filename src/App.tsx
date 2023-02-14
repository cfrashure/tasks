import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import face from "./assets/face.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World! UD CISC275 with React Hooks and TypeScript. This
                sentence was added by Colby Frashure.
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Adding some more stuff! Lets have some fun!</h1>
            What to add:
            <ul>
                <li>A cool image</li>
                <li>A cool button</li>
                <li>A cool color &#40;literally&#41;</li>
            </ul>
            <img src={face} alt="A cool smiley face" />
            &nbsp;
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                &nbsp;
                <Row>
                    <Col>
                        <div id="rect1">Rectangle 1</div>
                    </Col>
                    <Col>
                        <div id="rect2">Rectangle 2</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
