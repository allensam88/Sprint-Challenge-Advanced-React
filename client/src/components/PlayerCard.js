import React from 'react';

class PlayerCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {}
    }

    render () {
        return (
            <div className='card'>
                <h4>{this.props.player.name}</h4>
                <p>Country: {this.props.player.country}</p>
                <p>Searches: {this.props.player.searches}</p>
            </div>
        )
    }
}

export default PlayerCard;