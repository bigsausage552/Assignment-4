import React, { useState } from 'react';

function AmbiguousCase() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [angle, setAngle] = useState('');
    const [result, setResult] = useState('');

    const ambiguousCase = (a, b, angle) => {
        if (angle == 90) {
            return 'Right triangle';
        }
        const h = Math.round(b * Math.sin(angle * (Math.PI / 180)) * 100) / 100;

        if (angle <= 90) {
            if (a < h) {
                return 'No triangle';
            } else if (h < a && a < b) {
                return 'Two triangles (ambiguous case)';
            } else if (a >= h) {
                return 'One triangle';
            } else {
                return 'No solution';
            }
        } else if (angle <= 180) {
            if (a <= b) {
                return 'No triangle';
            } else if (a > b) {
                return 'One triangle';
            }
        } else {
            return 'No solution';
        }
    };

    const handleAmbiguous = () => {
        const sidea = parseFloat(a);
        const sideb = parseFloat(b);
        const anglea = parseFloat(angle);
        setResult(ambiguousCase(sidea, sideb, anglea));
    };

    return (
        <div className="ambiguous-case calculations">
            <h2>Ambiguous Case</h2>
            <label>Angle A:</label>
            <input
                type="text"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
            />
            <label>Side a:</label>
            <input
                type="text"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />
            <label>Side b:</label>
            <input
                type="text"
                value={b}
                onChange={(e) => setB(e.target.value)}
            />
            <label>Triangle Type (Result):</label>
            <input type="text" value={result} disabled />
            <button onClick={handleAmbiguous}>Calculate</button>
        </div>
    );
}

export default AmbiguousCase;


