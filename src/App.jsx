import React from 'react'
import './App.css'
import MovieList from './components/movielist/MovieList'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App
