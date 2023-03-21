import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "white"
    ];
    const [color, setColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorMap: string) => (
                <Form.Check
                    style={{ backgroundColor: colorMap }}
                    inline
                    key={colorMap}
                    type="radio"
                    name={colorMap}
                    onChange={updateColor}
                    id={colorMap}
                    label={colorMap}
                    value={colorMap}
                    checked={colorMap === color}
                />
            ))}
            <div>You have chosen </div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}.
            </span>
        </div>
    );
}
