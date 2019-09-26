import React, {Component} from 'react';
import Clock from './Clock';
import ActionClick from './ActionClick';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page'


class App extends Component {

    render() {

        function Mailbox(props){
            const unreadMessages = props.unreadMessages;
            return(
                <div>
                    <h1>Exemple  Mailbox</h1>
                    {unreadMessages.length > 0 && 
                    <h2>
                        Vouavez {unreadMessages.length} message(s) non lu(s).
                    </h2>
                }
                </div>
            )
        }

        const messages = ['sdf', 'gfd','hui,','trtro'];
 
        return (
            <div>
                <Clock/>
                <ActionClick/>
                <Toggle/>
                <Page/>
                <LoginControl/>
                <Mailbox unreadMessages={messages}/>
               
            </div>
        )
    }
}

export default App;