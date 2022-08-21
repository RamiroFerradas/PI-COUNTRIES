import "./App.css";
import { Route, Routes } from "react-router-dom";

// componentes
import Landing from "./Components/Landing/Landing";
import CountryDetail from "./Components/Country Detail/CountryDetail";
import ActivityCreate from "./Components/Activity Create/ActivityCreate";
import Home from "./Components/Home/Home";

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
