import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import "./App.css";
import { setSearchField, fetchRobots } from "../actions";

class App extends Component {
  async componentDidMount() {
    this.props.fetchRobots();
  }
  onSearchChange = event => this.props.setSearchField(event.target.value);
  render() {
    const { robots, searchField } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchReducer.searchField,
  robots: state.robotsReducer.robots
});
const mapDispatchToProps = {
  setSearchField,
  fetchRobots
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
