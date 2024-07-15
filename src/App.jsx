import "./App.css";
import OrgScreen from "./components/OrgScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserScreen from "./components/UserScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/org" element={<OrgScreen />} />
        <Route path="/" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
