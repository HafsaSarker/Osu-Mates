import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import HomePage from './Pages/Home/HomePage'
import CreateCrew from './Pages/Create/CreateCrew';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />}/>
          <Route path='/create' element={<CreateCrew />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
