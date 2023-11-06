import MovieNames from "./MovieNames";
import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
          </Routes>
          {/* <MovieNames /> */}
        </Router>
      </div>
  );
}

export default App;
