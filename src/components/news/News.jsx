import React from 'react'
import NewsItem from '../newsItem/NewsItem'
import './style.css'


const API_KEY = 'fa77c44940aa4d36be5a89055395d438';
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

class News extends React.Component {
  state = {
    newsData: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.status === 'ok') {
        this.setState({
          newsData: data.articles,
          loading: false,
        });
      } else {
        throw new Error('Error fetching news data.');
      }
    } catch (error) {
      this.setState({
        error: 'Error fetching news data. Please try again later.',
        loading: false,
      });
    }
  }

  render() {
    const { newsData, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="news-container">
        {newsData.map((item) => (
          <NewsItem key={item.url} image={item.urlToImage} title={item.title} subtitle={item.description} />
        ))}
      </div>
    );
  }
}

export default News;
