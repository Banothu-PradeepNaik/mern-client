// src/components/Home.js
import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <input
        name="search"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit" className="primary" onClick={handleButtonClick}>Greet</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Home;