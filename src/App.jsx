import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./index.css";
import { CreateResumePage } from "./pages/CreateResumePage/CreateResumePage";
import HomePage from "./pages/HomePage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

//DUMMY SIGNIN
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route path="/create" element={<CreateResumePage />} />
          <Route
            // path="/edit-resume/:id"
            path="/edit-resume"
            element={<CreateResumePage isEdit={true} />}
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
