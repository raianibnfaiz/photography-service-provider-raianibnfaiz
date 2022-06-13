import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Checkout from "./Pages/Checkout/Checkout";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout/:checkoutId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
