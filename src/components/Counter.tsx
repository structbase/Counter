import type React from "react";
import { useState, type ChangeEvent } from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1);
    const [history, setHistory] = useState<number[]>([]);

    const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 1) {
            setStep(value);
        }
    };

    const handleCountAndHistory = (newCount: number) => {
        setCount(newCount);
        setHistory((prevHistory) => [...prevHistory, newCount]);
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
                            onClick={() => handleCountAndHistory(count - step)}
                        >
                            Decrement
                        </button>

                        <button
                            onClick={() => handleCountAndHistory(count + step)}
                        >
                            Increment
                        </button>
                        <button onClick={() => setCount(0)}>Reset</button>
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
