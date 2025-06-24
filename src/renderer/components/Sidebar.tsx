import React from "react";

interface SidebarProps {
  onSelect: (target: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const sampleTargets = ["//app:main", "//lib:utils", "//core:engine"];

  return (
    <aside style={{
      width: "250px",
      borderRight: "1px solid #ccc",
      padding: "1rem"
    }}>
      <h2>Bazel Targets</h2>
      <ul>
        {sampleTargets.map((target) => (
          <li key={target}>
            <button
              onClick={() => onSelect(target)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
            >
              {target}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
