import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Electronics from "./Pages/Electronics/Electronics";
import Mens from "./Pages/Mens/Mens";
import Womens from "./Pages/Womens/Womens";
import Kids from "./Pages/Kids/Kids";
import PageNotFound from "./Pages/Pagenotfound/page404";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path={"/Electronics"} element={<Electronics/>} />
            <Route path={"/Mens"} element={<Mens/>} />
            <Route path={"/Womens"} element={<Womens/>} />
            <Route path={"/Kids"} element={<Kids/>} />
            <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}
export default App;
