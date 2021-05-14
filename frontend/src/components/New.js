import React from 'react'
import Newsfeed from './Newsfeed'

const New = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-info" >
        <a className=" mx-3 navbar-brand" href="/" style={{ color: "aqua" }}>
          <h3>VNPS</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          



        </div>
      </nav>
            <Newsfeed/>
        </div>
    )
}

export default New
