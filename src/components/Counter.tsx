import type React from "react";
import { useState, type ChangeEvent } from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1);

const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1) {
        setStep(value);
    }
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
                            onClick={() =>
                                count > 0 && setCount(count - 1 * step)
                            }
                        >
                            Decrement
                        </button>

                        <button onClick={() => setCount(count + 1 * step)}>
                            Increment
                        </button>
                        <button onClick={() => setCount(0)}>Reset</button>
                    </div>
                    <div>
                        <label htmlFor="value">Step Value</label>
                        <input type="number" min={1} value={step} onChange={handleStepChange}/>
                    </div>
                </div>

                <div>
                    <p>Count History:</p>
                </div>
                {/* placeholder */}
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};
