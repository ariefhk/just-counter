import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg"; //from assets
import viteLogo from "/vite.svg"; //from public
import "./styles/App.css";

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [nCount, setNCount] = useState<number>(0);
    const [inputRange, setInputRange] = useState<number>(1);
    const [intervalCount, setIntervalCount] = useState<number>(0);
    const [isCount, setIsCount] = useState<boolean>(false);

    const handleCount = (): void => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleNCount = (): void => {
        setNCount((prevNCount) => prevNCount + inputRange);
    };

    const handleCountingInterval = (): void => {
        setIsCount(!isCount);
    };

    const handleClearCounter = (): void => {
        setCount(0);
        setNCount(0);
        setIntervalCount(0);
        setInputRange(1);
    };

    useEffect(() => {
        if (isCount) {
            const countingInterval = setInterval(() => {
                setIntervalCount((prevIntervalCount) => prevIntervalCount + 1);
            }, 1000);

            return () => clearInterval(countingInterval);
        }
    }, [isCount]);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Just A Simple Counter</h1>
            <div className="card">
                <div>
                    <p>Add 1 value</p>
                    <button type="button" onClick={handleCount}>
                        count is {count}
                    </button>
                </div>
                <div>
                    <p>Interval Counter</p>
                    <button type="button" onClick={handleCountingInterval}>
                        {isCount
                            ? `counting... ${intervalCount} `
                            : `stop counting in ${intervalCount} `}
                    </button>
                </div>
                <div>
                    <form className="n-counter">
                        <input
                            type="text"
                            id="nCounter"
                            className="n-counter-input"
                            value={inputRange}
                            onChange={(e) => {
                                if (!e.target.value) {
                                    setInputRange(0);
                                } else {
                                    setInputRange(Number(e.target.value));
                                }
                            }}
                        />
                        <label htmlFor="nCounter">Input range counter</label>
                    </form>
                    <button type="button" onClick={handleNCount}>
                        count is {nCount}
                    </button>
                </div>
            </div>
            <div>
                <button type="button" onClick={handleClearCounter}>
                    Clear All Counter
                </button>
            </div>
        </>
    );
};

export default App;
