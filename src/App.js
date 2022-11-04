import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <div>
      <div className="App"></div>
      <Home />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/categories/:category" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
