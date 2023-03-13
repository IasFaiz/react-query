import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home.page";
import { SuperHeroes } from "./components/SuperHeroes.page";
import { RQSuperHeroes } from "./components/RQSuperHeroes.page";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div
        style={{
          width: "1000px",
          height: "1000px",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/super-heroes" className="navbar-brand">
                  Traditional Super Heroes
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/rq-super-heroes " className="navbar-brand">
                  RQ Super Heroes
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
