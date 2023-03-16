import "./App.css";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { Documents } from "./components/Documents";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="about" element={<About />}>
        {" "}
      </Route>
      <Route path="documents" element={<Documents />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default App;
