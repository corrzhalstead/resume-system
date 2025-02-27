import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import { CreateResumePage } from "./pages/CreateResumePage/CreateResumePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
