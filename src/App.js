import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GatherDetails, ShowDetails } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GatherDetails />} />
          <Route path="/user" element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
