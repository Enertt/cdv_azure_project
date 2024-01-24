import "./App.css";
import Main from "./Components/Main/Main";
import Animals from "./Components/Animals/Animals";
import Database from "./Components/Database/Database";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </div>
  );
}

export default App;
