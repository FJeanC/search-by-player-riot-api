import React from "react"
import './Home.css'

import Header from "../templates/Header"
import SearchForm from "../templates/SearchForm"
import kalista from '../../assets/kalista.png'
import Image from '../templates/Image'

const Home = function () {
    return (
      <React.Fragment>
          <div className="container">
            <Header />
            <SearchForm />
            
        </div>
        <Image sourceImg={kalista}/>
      </React.Fragment>
    )
}

export default Home