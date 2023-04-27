import "./App.css";
import { HomePage } from "./components/HomePage";
import { About } from "./components/About";
import { Documents } from "./components/Documents";
import { Support } from "./components/Support";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Sample } from "./components/Sample";
import { Dept } from "./components/Dept";
import { Engineering } from "./components/Engineering";
import { Facms } from "./components/Facms";
import { Test } from "./components/Test";
import { Materials } from "./components/Materials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="about" element={<About />}>
        {" "}
      </Route>
      <Route path="documents" element={<Documents />}></Route>
      <Route path="support-us" element={<Support />}>
        {" "}
      </Route>

      <Route path="test" element={<Test />}>
        {" "}
      </Route>

      <Route path="sample" element={<Sample />}>
        {" "}
      </Route>
      <Route path="documents/facms" element={<Facms />}>
        {" "}
      </Route>
      <Route path="documents/facms/level-one/materials" element={<Materials />}>
        {" "}
      </Route>
      <Route path="documents/engineering" element={<Engineering />}>
        {" "}
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
