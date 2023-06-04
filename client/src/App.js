import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Add from './pages/Add';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
