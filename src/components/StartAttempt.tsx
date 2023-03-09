import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        setAttempt(attempt - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function increaseAttempt(): void {
        setAttempt(attempt + 1);
    }
    return (
        <>
            <span>
                <Button
                    onClick={startQuiz}
                    disabled={progress || attempt === 0}
                >
                    Start Quiz
                </Button>
            </span>
            <span>
                <Button onClick={stopQuiz} disabled={!progress}>
                    Stop Quiz
                </Button>
            </span>
            <span>
                <Button onClick={increaseAttempt} disabled={progress}>
                    Mulligan
                </Button>
            </span>
            <span> {attempt}</span>
        </>
    );
}
