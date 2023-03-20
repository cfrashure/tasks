import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);
    function changeNumber1(): void {
        setDice1(d6());
    }
    function changeNumber2(): void {
        setDice2(d6());
    }
    return (
        <>
            <span data-testid="left-die">
                <Button onClick={changeNumber1}>Roll Left</Button> {dice1}
            </span>
            <span data-testid="right-die">
                <Button onClick={changeNumber2}>Roll Right</Button> {dice2}
            </span>
            <span>
                {dice1 === dice2 && dice1 !== 1 ? (
                    <span> Win</span>
                ) : dice1 === 1 && dice2 === 1 ? (
                    <span> Lose</span>
                ) : (
                    <span></span>
                )}
            </span>
        </>
    );
}