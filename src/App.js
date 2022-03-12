import './App.css';
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Edit from "./components/Edit";
import Add from "./components/Add";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
