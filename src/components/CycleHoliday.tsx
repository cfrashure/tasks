import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // Holidays: 😘, 🥚, 🇲🇽, 🎃, 🎄 (date)
    // Holidays: 🎄, 🇲🇽, 🥚, 🎃, 😘(alphabetical)
    const [holiday, setHoliday] = useState<string>("😘");
    function alphaHoliday(): void {
        const newEmoji = aHRec[holiday];
        setHoliday(newEmoji);
    }
    function dateHoliday(): void {
        const newEmoji = dHRec[holiday];
        setHoliday(newEmoji);
    }
    const aHRec: Record<string, string> = {
        "😘": "🎄",
        "🥚": "🎃",
        "🇲🇽": "🥚",
        "🎃": "😘",
        "🎄": "🇲🇽"
    };
    const dHRec: Record<string, string> = {
        "😘": "🥚",
        "🥚": "🇲🇽",
        "🇲🇽": "🎃",
        "🎃": "🎄",
        "🎄": "😘"
    };
    return (
        <>
            <span>
                <Button onClick={alphaHoliday}>Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={dateHoliday}>Advance by Year</Button>
            </span>
            <span>Holiday: {holiday}</span>
        </>
    );
}
