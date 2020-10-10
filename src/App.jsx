import React from 'react'
import Feed from "react-instagram-authless-feed"
import './App.scss'

const App = () => (
  <div>
    <header>
    </header>
    <h1>
      <a href="#top">
        Szeged 1000 arca
      </a>
      </h1>
    <div id="top" className="sticky-nav">
    Szeged 1000 arca
    </div>
    <main>
    <Feed userName="szeged1000arca" className="Feed" classNameLoading="Loading"/>
  </main>
  </div>
)

export default App
