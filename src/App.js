import './App.css';
import Home from './components/home';
import Create from './components/create';
import Update from './components/update'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} /> 
          <Route path="/edit/:id" element={<Update />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
