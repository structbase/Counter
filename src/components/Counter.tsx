import type React from "react";
import { useState } from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

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
                            onClick={() => count > 0 && setCount(count - 1)}
                        >
                            Decrement
                        </button>

                        <button onClick={() => setCount(count + 1)}>
                            Increment
                        </button>
                        <button onClick={() => setCount(0)}>Reset</button>
                    </div>
                    <div>
                        <label htmlFor="value">Step Value</label>
                        <input type="number" min={1} value={1} />
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
