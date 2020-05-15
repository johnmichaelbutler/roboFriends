import React, { useEffect } from 'react';
import { setReduxSearchField, fetchRobotsStartAsync } from '../redux/actions';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

const App = (props) => {
  const { searchField, setSearchField, onFetchRobots, robots, isFetching } = props;

  useEffect(() => {
    onFetchRobots();
  }, [onFetchRobots]);

  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })


  return isFetching ? <h1 className='f1 tc'>Loading</h1>
    : (
    <div className='tc'>
      <Header />
      <SearchBox searchField={searchField} searchChange={setSearchField} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobot} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isFetching: state.requestRobots.isFetching,
    errorMessage: state.requestRobots.errorMessage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchField: (event) => dispatch(setReduxSearchField(event.target.value)),
    onFetchRobots: () => dispatch(fetchRobotsStartAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);