import React, { useState } from 'react';
import './HeronsFormula.css';

const heronsFormula = (a, b, c) => {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)) || 0;
};

const HeronsFormula = () => {
    const [sides, setSides] = useState({ a: '', b: '', c: '' });
    const [area, setArea] = useState('');

    const handleChange = (e) => {
        setSides({ ...sides, [e.target.name]: parseFloat(e.target.value) || '' });
    };

    const calculate = () => {
        const { a, b, c } = sides;
        setArea(heronsFormula(a, b, c).toFixed(2));
    };

    return (
        <div className="herons-formula calculations">
            <h2>Heron's Formula</h2>
            <label>Side a:</label>
            <input type="number" name="a" value={sides.a} onChange={handleChange} />
            <label>Side b:</label>
            <input type="number" name="b" value={sides.b} onChange={handleChange} />
            <label>Side c:</label>
            <input type="number" name="c" value={sides.c} onChange={handleChange} />
            <label>Area (Result):</label>
            <input type="text" value={area} disabled />
            <button onClick={calculate}>Calculate</button>
        </div>
    );
};

export default HeronsFormula;
