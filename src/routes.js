import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PaginaPadrao from './components/StandartPage';
import Inicio from './components/Paginas/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
