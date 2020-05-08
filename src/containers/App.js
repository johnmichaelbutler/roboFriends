import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);

  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  useEffect(() => {
    const fetchRobots = async () => {
      const fetchRequest = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const robotsList = await fetchRequest.json();
      setRobots(robotsList);
    };

    fetchRobots();
  }, [robots]);

  return !robots.length ? <h1 className='f1 tc'>Loading</h1>
    : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchField={searchField} setSearchField={setSearchField} />
      <Scroll>
        <CardList robots={filteredRobot} />
      </Scroll>
      {console.log(searchField)}
    </div>
  )
};

export default App;