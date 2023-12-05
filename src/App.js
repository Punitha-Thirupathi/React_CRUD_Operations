import "./App.css";
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="main">
      <h1 >React CRUD Operations</h1> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Add />} />
          <Route exact path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
    
  );
}
export default App;
