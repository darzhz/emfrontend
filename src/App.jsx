import "./App.css";
import OrgScreen from "./components/OrgScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserScreen from "./components/UserScreen";
import Registerhome from "./components/Registerhome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/org" element={<OrgScreen />} />
        <Route path="/" element={<UserScreen />} />
        <Route path="/reg" element={<Registerhome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
