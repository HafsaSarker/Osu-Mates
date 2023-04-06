import { Routes, Route } from "react-router-dom"; 
import Layout from './routes/Layout';
import HomePage from './Pages/Home/HomePage'
import CreateCrew from './Pages/Create/CreateCrew';
import ReadCrew from './Pages/Read/ReadCrew';
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />}/>
          <Route path='/create' element={<CreateCrew />}/>
          <Route path='/gallery' element={<ReadCrew />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
