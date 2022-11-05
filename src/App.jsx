import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";

import Login from "./Login.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
