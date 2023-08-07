import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './style.css'

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar">
        <div className="logo">ReactNews360</div>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
