import "./App.css";
import { Route, Routes } from "react-router-dom";

// componentes
import CountryDetail from "./Components/Country Detail/CountryDetail";
import ActivityCreate from "./Components/Activity Create/ActivityCreate";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import Activities from "./Components/Activities/Activities";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
        <Route path="/create" element={<ActivityCreate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
