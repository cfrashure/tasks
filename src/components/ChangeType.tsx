import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else if (type === "multiple_choice_question") {
            setType("short_answer_question");
        }
    }
    return (
        <span>
            <Button onClick={flipType}>Change Type</Button>{" "}
            {type === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </span>
    );
}
