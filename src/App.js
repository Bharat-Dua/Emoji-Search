import React, { useState } from "react";
import "./App.css";
import { emojiData } from "./emojiData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoverName, setHoverName] = useState("");
  const [hoverTimeOut, setHoverTimeOut] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleMouseEnter = (name) => {
    if (hoverTimeOut) clearTimeout(hoverTimeOut);
    setHoverName(name);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoverName("");
    }, 300);
    setHoverTimeOut(timeout);
  };
  const filterEmojis = emojiData.filter((emoji) => {
    const emojiName = emoji.name.toLowerCase();
    return emojiName.includes(searchTerm.toLowerCase());
  });
  console.log(emojiData);
  return (
    <div className="App">
      <h1>Search Emoji</h1>
      <input
        type="text"
        placeholder="search emoji"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="emoji-container">
        {filterEmojis.length > 0
          ? filterEmojis.map((emoji) => (
              <span
                key={emoji.id}
                onMouseEnter={() => handleMouseEnter(emoji.name)}
                onMouseLeave={handleMouseLeave}
                className="emoji"
              >
                {emoji.symbol}
              </span>
            ))
          : "no  emojis found"}
      </div>
      {hoverName && <div className="hover-name">{hoverName}</div>}
    </div>
  );
}

export default App;
