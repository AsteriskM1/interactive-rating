import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Feedback, Thanks } from './pages';

const App = () => {
  const [count, setCount] = useState(0)
  const handleData = (data) => {
    setCount(data);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feedback onData={handleData} />} />
        <Route path="thanks" element={<Thanks count={count} />} />
      </Routes>
    </div>
  )
}

export default App