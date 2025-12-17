import React, { useEffect, useState, type ChangeEvent } from "react";

export const Counter: React.FC = () => {
    // a useState hook for count and localStorage for saving it
    const [count, setCount] = useState<number>(() => {
        const saved = localStorage.getItem("Current Count");
        return saved !== null ? Number(saved) : 0;
    });

    // a useState hook for step
    const [step, setStep] = useState<number>(1);

    // a useState hook for history and local storage for saving history
    const [history, setHistory] = useState<number[]>(() => {
        const saved = localStorage.getItem("Count History");
        return saved ? JSON.parse(saved) : [];
    });

    // Save the history array to localStorage with simulated async and cleanup
    useEffect(() => {
        const saveTimeout = setTimeout(() => {
            localStorage.setItem("Count History", JSON.stringify(history));
        }, 200); // simulate async save

        // Cleanup prevents overlapping saves if history changes quickly
        return () => clearTimeout(saveTimeout);
    }, [history]);

    // save the whole history list; must be stringifyed first!
    useEffect(() => {
        localStorage.setItem("Count History", JSON.stringify(history));
    }, [history]);

    // change the step amount keeps it above one
    const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStep = Number(e.target.value);
        if (newStep >= 1) setStep(newStep);
    };

    // change the count and add it to the array
    const updateCountAndHistory = (newCount: number) => {
        setCount(newCount);
        setHistory((prev) => [...prev, newCount]); // append new count
    };

    // reset everything out and start from defaults
    const handleReset = () => {
        setCount(0);
        setHistory([]);
    };
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Main Counter Card */}
                    <div className="card shadow-sm mb-4">
                        <div className="card-header bg-primary text-white text-center">
                            <h1 className="h4 mb-0">Counter App</h1>
                        </div>
                        <div className="card-body text-center">
                            <div className="display-4 fw-bold mb-4">
                                {count}
                            </div>

                            <div className="d-flex justify-content-center gap-2 mb-4">
                                <button
                                    className="btn btn-outline-danger px-4"
                                    onClick={() =>
                                        updateCountAndHistory(count - step)
                                    }
                                >
                                    - {step}
                                </button>
                                <button
                                    className="btn btn-warning px-4"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                                <button
                                    className="btn btn-outline-success px-4"
                                    onClick={() =>
                                        updateCountAndHistory(count + step)
                                    }
                                >
                                    + {step}
                                </button>
                            </div>

                            <div className="row g-3 align-items-center justify-content-center border-top pt-3">
                                <div className="col-auto">
                                    <label
                                        htmlFor="stepInput"
                                        className="col-form-label fw-bold"
                                    >
                                        Step Value:
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        id="stepInput"
                                        type="number"
                                        className="form-control"
                                        min={1}
                                        value={step}
                                        onChange={handleStepChange}
                                        style={{ width: "80px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* History Section */}
                    <div className="card shadow-sm">
                        <div className="card-header bg-light d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-secondary">
                                History
                            </span>
                            <span className="badge bg-secondary rounded-pill">
                                {history.length} Entries
                            </span>
                        </div>
                        <div
                            className="card-body p-0"
                            style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                            {history.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {history
                                        .slice()
                                        .reverse()
                                        .map((h, index) => (
                                            <li
                                                key={index}
                                                className="list-group-item d-flex justify-content-between"
                                            >
                                                <small className="text-muted">
                                                    Change #
                                                    {history.length - index}
                                                </small>
                                                <span className="fw-bold">
                                                    {h}
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            ) : (
                                <div className="p-3 text-center text-muted italic">
                                    No activity yet
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
