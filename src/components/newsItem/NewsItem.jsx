import React, { Component } from 'react'
import './style.css'
export default class NewsItem extends Component {
  render() {
    const {title, description, image, key} = this.props;
    return (
        <div className="news-item">
        <img src={image} alt="News" className="news-image" />
        <div className="news-content">
          <h2 className="news-title">{title}</h2>
          <p className="news-subtitle">{description}</p>
          <button className="know-more-button">
            <a href={key} className="know-more-button">Read More</a>
          </button>
        </div>
      </div>
    )
  }
}
