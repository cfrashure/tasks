import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                type="switch"
                id="edit-switch"
                label="Enable Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode ? (
                <>
                    <Form.Group controlId="edit-form">
                        <Form.Label>Enter name below:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Enable if this is a student."
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                </>
            ) : (
                <div>
                    {name} is {isStudent ? "" : "not"} a student{" "}
                </div>
            )}
        </div>
    );
}
