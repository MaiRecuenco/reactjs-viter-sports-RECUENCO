// import { Route, Router, Routes } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";
import Home from "./components/pages/home/Home";
import Football from "./components/pages/football/Football";
import Basketball from "./components/pages/basketball/Basketball";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/football" element={<Football />}></Route>
          <Route path="/basketball" element={<Basketball />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
