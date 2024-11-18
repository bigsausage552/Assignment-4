import React, { useState } from 'react';
import './NewtonsMethod.css';

const newtonsMethod = (guess) => {
    const f = (x) => 6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6;
    const fPrime = (x) => 24 * x ** 3 - 39 * x ** 2 - 36 * x + 7;
    let x = guess;
    for (let i = 0; i < 1000; i++) {
        const next = x - f(x) / fPrime(x);
        if (Math.abs(next - x) < 0.0001) return next;
        x = next;
    }
    return x;
};

const NewtonsMethod = () => {
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        setResult(newtonsMethod(parseFloat(guess) || 0).toFixed(5));
    };

    return (
        <div className="newtons-method calculations">
            <h2>Newton's Method</h2>
            <label>Root Guess:</label>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
            <label>Root Approximation (Result):</label>
            <input type="text" value={result} disabled />
            <button onClick={calculate}>Calculate</button>
        </div>
    );
};

export default NewtonsMethod;
