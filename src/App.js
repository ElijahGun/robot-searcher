import React, { Component } from 'react';
import RobotData from './data/robots.data.json';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: RobotData,
      searchInput: '',
    };
  }

  handleChange = (e) => this.setState({ searchInput: e.target.value });

  render() {
    const { robots, searchInput } = this.state;
    const filteredBots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="App">
        <h1>
          <span alt="magnifying glass" role="image">
            🔎
          </span>{' '}
          Robot Searcher
          <span alt="magnifying glass" role="image">
            🔍
          </span>
        </h1>
        <SearchBar
          handleChange={this.handleChange}
          placeholder={'Search Robots'}
        />
        <CardList robots={filteredBots} />
      </div>
    );
  }
}

export default App;
