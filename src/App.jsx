import "./App.css";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { Documents } from "./components/Documents";
import { Support } from "./components/Support";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Sample } from "./components/Sample";
import { Dept } from "./components/Dept"
import { Computer } from "./components/Computer";
import { Test } from "./components/Test";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="about" element={<About />}>
        {" "}
      </Route>
      <Route path="documents" element={<Documents />}>
        <Route path="computer" element={<Computer />}></Route>
        <Route path="test" element={<Test />}></Route>
      </Route>
      <Route path="support-us" element={<Support />}>
        {" "}
      </Route>
      <Route path="sample" element={<Sample />}>
        {" "}
      </Route>
      {/* <Route path="document/computer" element={<Computer />}>
        {" "}
      </Route> */}
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    
  );
}

export default App;
