import React, { useState } from 'react';
import './PolynomialFunction.css';

const evaluatePolynomial = (coeffs, exps, x) =>
    coeffs.reduce((sum, coeff, i) => sum + coeff * x ** exps[i], 0);

const PolynomialFunction = () => {
    const [coeffs, setCoeffs] = useState('');
    const [exps, setExps] = useState('');
    const [x, setX] = useState('');
    const [functionText, setFunctionText] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        const c = coeffs.split(' ').map(Number);
        const e = exps.split(' ').map(Number);
        setFunctionText(c.map((coef, i) => `${coef}x^${e[i]}`).join(' + '));
        setResult(evaluatePolynomial(c, e, parseFloat(x) || 0));
    };

    return (
        <div className="polynomial-function calculations">
            <h2>Polynomial Function</h2>
            <label>Coefficients:</label>
            <input type="text" value={coeffs} onChange={(e) => setCoeffs(e.target.value)} />
            <label>Exponents:</label>
            <input type="text" value={exps} onChange={(e) => setExps(e.target.value)} />
            <label>X Value:</label>
            <input type="text" value={x} onChange={(e) => setX(e.target.value)} />
            <label>Polynomial Function (Result):</label>
            <input type="text" value={functionText} disabled />
            <label>Polynomial Evaluation (Result):</label>
            <input type="text" value={result} disabled />
            <button onClick={calculate}>Calculate</button>
        </div>
    );
};

export default PolynomialFunction;
