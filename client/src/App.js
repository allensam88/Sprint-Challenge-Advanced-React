import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
    }
  }

  componentDidMount () {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log(response);
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.players !== this.state.players) {
  //     axios
  //       .get(`http://localhost:5000/api/players`)
  //       .then(response => {
  //         this.setState({
  //           players: response.data
  //         });
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  render () {
    return (
      <div className='App'>
        <Navbar />
        <div className='card_container' data-testid='cards'>
          {this.state.players.map(player => (
              <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;