import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        );
    }

    decrementCount = () => {
        this.setState(
            {
                count : this.state.count - 1
            }
        )
    }

    render() {
        return (
           <div>
            <button className='increase-btn' onClick={this.incrementCount}>Increase</button>
            <span>{this.state.count}</span>
            <button className='decrease-btn' onClick={this.decrementCount}>Decrease</button>
           </div>
        );
    }
}

export default Main;