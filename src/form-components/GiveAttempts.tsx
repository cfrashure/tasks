import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    function updateAttempts() {
        setAttempts(
            !Number.isNaN(parseInt(request)) &&
                attempts + parseInt(request) >= 0
                ? parseInt(request) + attempts
                : attempts
        );
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
            </Form.Group>
            <span>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts == 0}
                >
                    use
                </Button>
                &nbsp;
            </span>
            <span>
                <Button onClick={updateAttempts}>gain</Button>
            </span>
            <div>{attempts}</div>
        </div>
    );
}
