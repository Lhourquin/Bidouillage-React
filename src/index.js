import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter : 0,
            
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        )
    }
}


ReactDOM.render(
    <Clock 
    />,
    document.getElementById('root')

);



