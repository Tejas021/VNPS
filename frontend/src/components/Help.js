import React from 'react'
import Navbar from './Navbar'

const Help = () => {
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
            <table>
            <tr><th>Emergency Services</th><th>Numbers</th></tr>
            <tr><td>National Emergency Number </td><td>112</td></tr>
            <tr><td>Police </td><td>100</td></tr>
            <tr><td>Fire</td><td>101</td></tr>
            <tr><td>Ambulance</td><td>102</td></tr>
            <tr><td>Women Helpline</td><td>1091</td></tr>
            <tr><td>Deputy Commissioner Of Police – Missing Child And Women </td><td>1094</td></tr>
            <tr><td>Road Accident Emergency Service</td><td>1073</td></tr>
            <tr><td>NDRF Helpline </td><td>011-24363260</td></tr>
            <tr><td>Railway Enquiry</td><td>139</td></tr>
            <tr><td>Senior Citizen Helpline</td><td>1291</td></tr>
        </table>
        </div>
    )
}

export default Help
