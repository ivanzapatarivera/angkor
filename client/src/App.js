import React from "react";
import { Router, Route, Link, Routes } from "react-router-dom";

const Main = () => <h1>Main!</h1>;
const Elsewhere = () => <h1>Elsewhere!</h1>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/else">Else</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/else/" component={Elsewhere} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
