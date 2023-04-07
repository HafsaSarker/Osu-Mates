import { Routes, Route } from "react-router-dom"; 
import Layout from './routes/Layout';
import HomePage from './Pages/Home/HomePage'
import CreateCrew from './Pages/Create/CreateCrew';
import ReadCrew from './Pages/Read/ReadCrew';
import './App.css'
import { useState } from "react";

function App() {
  const [crews, setAllCrews] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />}/>
          <Route path='/create' element={<CreateCrew />}/>
          <Route path='/gallery' element={<ReadCrew crews={crews} setAllCrews={setAllCrews} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
