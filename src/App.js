import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="App"></div>
      <Home />
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
