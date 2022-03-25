import './App.css';
import LandingPage from './Components/LandingPage' 
import Login from './Components/Login'
import Model3 from './Components/Model3';
import ErrorPage from './ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route exact path='/Login' element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path='/Model3' element={<Model3 />} />
      </Routes>
      <Routes>
        <Route exact path='/404' element={<ErrorPage />} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
