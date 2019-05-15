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

function ActionClick(){

    function handleClick(e) {
        e.preventDefault();
        console.log('Le lien a été cliqué.')
    }

    
        return (
            <a href="#" onClick={handleClick}>
                Clique ici
            </a>
        )
}

class Toggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

class Element extends React.Component {


    render(){
        return (
            <div>
                <Clock/>
                <ActionClick/>
                <Toggle/>
                <Clock/>
                <Clock/>
            </div>
        )
    }
}


ReactDOM.render(
    <Element/>,
    document.getElementById('root')

);



