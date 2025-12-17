import type React from "react";

export const Counter: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Counter App</h1>
                </div>
                <div>
                    <p>Current Count:</p>
                </div>
                <div>
                    <div>
                        <button>Decrement</button>
                        <button>Increment</button>
                        <button>Reset</button>
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
