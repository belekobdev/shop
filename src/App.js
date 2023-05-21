import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Fovorite from "./components/Fovorite";

function App() {
  return (
    <div className="App bg-[#181818]">
        <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/basket"} element={<Basket/>}/>
        <Route path={"/fovorite"} element={<Fovorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
