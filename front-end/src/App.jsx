import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
