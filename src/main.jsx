import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bought from './components/Routes/bought/bought.jsx'
import Bookmarks from './components/Routes/bookmark/bookmarks.jsx'
import ShowSneakers from './components/Routes/showSneakers/showSneakers.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/bought' element={<Bought />}/>
        <Route path='/bookmarks' element={<Bookmarks />}/>
        <Route path='/sneakers/:id' element={<ShowSneakers />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
