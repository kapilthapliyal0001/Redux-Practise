import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </>
  );
}

export default App;
