import "./App.css";
import { Route, Routes } from "react-router-dom";

// componentes
import Landing from "./Landing/Landing";
import CountryDetail from "./Country Detail/CountryDetail";
import ActivityCreate from "./Activity Create/ActivityCreate";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/videogame/:id" element={<CountryDetail />} />
        <Route path="/create" element={<ActivityCreate />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
