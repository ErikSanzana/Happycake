import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Contacto from './views/Contacto';

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;



