import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <Sidebar onSelect={setSelectedTarget} />
      <main style={{ flex: 1, padding: "1rem" }}>
        <h1>BazelLens</h1>
        {selectedTarget ? (
          <div>
            <h2>Target Selected:</h2>
            <pre>{selectedTarget}</pre>
            {/* Placeholder for more target details */}
          </div>
        ) : (
          <p>Select a Bazel target to view details.</p>
        )}
      </main>
    </div>
  );
};

export default App;
