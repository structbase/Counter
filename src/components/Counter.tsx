import React, { useEffect, useState, type ChangeEvent } from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(() => {
        const saved = localStorage.getItem("Current Count");
        return saved !== null ? Number(saved) : 0;
    });

    const [step, setStep] = useState<number>(1);

    const [history, setHistory] = useState<number[]>(() => {
        const saved = localStorage.getItem("Count History");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("Current Count", String(count));
    }, [count]);

    useEffect(() => {
        localStorage.setItem("Count History", JSON.stringify(history));
    }, [history]);

    const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStep = Number(e.target.value);
        if (newStep >= 1) setStep(newStep);
    };

    const updateCountAndHistory = (newCount: number) => {
        setCount(newCount);
        setHistory((prev) => [...prev, newCount]);
    };

    const handleReset = () => {
        setCount(0);
        setHistory([]);
    };
    return (
        <div>
            <div>
                <div>
                    <h1>Counter App</h1>
                </div>
                <div>
                    <p>Current Count: {count}</p>
                </div>
                <div>
                    <div>
                        <button
                            onClick={() => updateCountAndHistory(count - step)}
                        >
                            Decrement
                        </button>

                        <button
                            onClick={() => updateCountAndHistory(count + step)}
                        >
                            Increment
                        </button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                    <div>
                        <label htmlFor="value">Step Value</label>
                        <input
                            type="number"
                            min={1}
                            value={step}
                            onChange={handleStepChange}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <p>Count History: {history.length}</p>
                    </div>
                    <div>
                        <ul>
                            {history.map((h, index) => (
                                <li key={index}>{h}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
