import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
  
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
  )
}

export default App;
