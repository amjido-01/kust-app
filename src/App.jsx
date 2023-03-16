import './App.css';
import { HomePage } from './components/HomePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <HomePage />}></Route>
    </Routes>
  )
}

export default App
