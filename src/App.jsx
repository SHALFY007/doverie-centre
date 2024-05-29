import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Volohov from './Pages/Volohov/Volohov'
import Mikheeva from './Pages/Mikheeva/Mikheeva';
import Zimina from './Pages/Zimina/Zimina';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path='/about' element={<About />}>

        </Route>
        <Route path='/volohov' element={<Volohov />}>
        </Route>
        <Route path='/mikheeva' element={<Mikheeva />}>
        </Route>
        <Route path='/zimina' element={<Zimina />}>
        </Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
