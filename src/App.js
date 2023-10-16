import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/homePage";
import Project from "./components/project";


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/project" element={<Project/>}/>
    </Routes>
 </Router>
  );
}

export default App;
