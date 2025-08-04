import React, { useState } from 'react';

const QueryToolUI = () => {
    const [tool, setTool] = useState('math');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8001/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tool, question }),
            });
            const data = await res.json();
            setResponse(data.answer);
        } catch (error) {
            setResponse('Error: ' + error.message);
        }
    };

    return (
        <div className="query-tool-ui">
            <form onSubmit={handleSubmit}>
                <select value={tool} onChange={(e) => setTool(e.target.value)}>
                    <option value="math">Math</option>
                    <option value="weather">Weather</option>
                    <option value="docs">Docs</option>
                </select>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question here..."
                    rows="4"
                />
                <button type="submit">Ask</button>
            </form>
            {response && (
                <div className="response-output">
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default QueryToolUI; 