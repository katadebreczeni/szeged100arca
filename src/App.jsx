import React from 'react'
import Feed from "react-instagram-authless-feed"
import './App.scss'

const App = () => (
  <div>
    <header>
      Szeged 1000 arca
    </header>
    <main>
    <Feed userName="szeged1000arca" className="Feed" classNameLoading="Loading"/>
  </main>
  </div>
)

export default App
