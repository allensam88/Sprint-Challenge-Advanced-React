import React from 'react';

class PlayerCard extends React.Component {

    render () {
        return (
            <div className='card'>
                <h4>{this.props.player.name}</h4>
                <p data-testid='country'>Country: {this.props.player.country}</p>
                <p data-testid='search'>Search Count: {this.props.player.searches}</p>
            </div>
        )
    }
}

export default PlayerCard;