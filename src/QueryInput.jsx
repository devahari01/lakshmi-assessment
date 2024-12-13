import React, { useState } from "react";

function QueryInput() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState({});

  const handleQuery = async () => {
    const res = await fetch("http://localhost:5000/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Stock Data Query System</h1>
      <input
        type="text"
        placeholder="Enter your query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />
      <button onClick={handleQuery} style={{ marginLeft: "10px", padding: "10px" }}>
        Search
      </button>
      {response && (
        <div style={{ marginTop: '20px' }}>
          {/*<h3>Response</h3>*/}
          <ul>
            {Object.entries(response).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
}

export default QueryInput;
