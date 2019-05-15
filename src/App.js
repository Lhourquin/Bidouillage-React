import React, {Component} from 'react';
import Clock from './Clock';
import ActionClick from './ActionClick';
import Toggle from './Toggle';
import LoginControl from './LoginControl';


class App extends Component {

    render() {
        return (
            <div>
                <Clock/>
                <ActionClick/>
                <Toggle/>
                <LoginControl/>
                <Clock/>
                <Clock/>
            </div>
        )
    }
}

export default App;